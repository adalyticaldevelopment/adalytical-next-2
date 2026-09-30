# -*- coding: utf-8 -*-
"""Pragmatic HTML -> JSX converter for the Adalytical migration.
Handles the constructs actually used in these pages. Not a general HTML parser."""
import re, sys

# hyphenated attribute -> JSX camelCase (SVG presentation attrs + HTML dom props)
ATTR = {
    "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin", "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset", "stroke-miterlimit": "strokeMiterlimit",
    "stroke-opacity": "strokeOpacity", "fill-rule": "fillRule", "clip-rule": "clipRule",
    "fill-opacity": "fillOpacity", "stop-color": "stopColor", "stop-opacity": "stopOpacity",
    "text-anchor": "textAnchor", "dominant-baseline": "dominantBaseline",
    "baseline-shift": "baselineShift", "flood-color": "floodColor", "flood-opacity": "floodOpacity",
    "clip-path": "clipPath", "color-interpolation-filters": "colorInterpolationFilters",
    "tabindex": "tabIndex", "colspan": "colSpan", "rowspan": "rowSpan",
    "maxlength": "maxLength", "minlength": "minLength", "readonly": "readOnly",
    "novalidate": "noValidate", "autocomplete": "autoComplete", "autofocus": "autoFocus",
    "spellcheck": "spellCheck", "inputmode": "inputMode", "enterkeyhint": "enterKeyHint",
    "crossorigin": "crossOrigin", "datetime": "dateTime", "contenteditable": "contentEditable",
    "srcset": "srcSet", "http-equiv": "httpEquiv", "accept-charset": "acceptCharset",
    "accesskey": "accessKey",
}
VOID = "img|br|input|meta|link|hr|source|area|base|col|embed|param|track|wbr"

def camel(prop):
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), prop)

def conv_style(m):
    body = m.group(1).strip().rstrip(";")
    if not body:
        return 'style={{}}'
    out = []
    for decl in body.split(";"):
        if ":" not in decl:
            continue
        k, v = decl.split(":", 1)
        k = k.strip(); v = v.strip().replace("'", "\\'")
        key = k if k.startswith("--") else camel(k)
        out.append("'%s':'%s'" % (key, v))
    cast = " as React.CSSProperties" if any(o.startswith("'--") for o in out) else ""
    return "style={{%s}%s}" % (",".join(out), cast)

def convert(s):
    # 1. HTML comments -> JSX comments (avoid nested */)
    s = re.sub(r"<!--(.*?)-->", lambda m: "{/*" + m.group(1).replace("*/", "* /") + "*/}", s, flags=re.S)
    # 2. inline styles first (before attr renames touch them)
    s = re.sub(r'style="([^"]*)"', conv_style, s)
    # 3. attribute renames
    s = re.sub(r"\bclass=", "className=", s)
    s = re.sub(r"\bfor=", "htmlFor=", s)
    for a, b in ATTR.items():
        s = re.sub(r"\b" + re.escape(a) + r"=", b + "=", s)
    # 4. self-close void elements
    s = re.sub(r"<(" + VOID + r")\b([^>]*?)\s*/?>", r"<\1\2 />", s)
    # 5. crossorigin with no value -> crossOrigin=""
    s = re.sub(r'\bcrossOrigin(?=[\s>])(?!=)', 'crossOrigin=""', s)
    return s

if __name__ == "__main__":
    src = sys.stdin.read()
    sys.stdout.write(convert(src))
