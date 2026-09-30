# -*- coding: utf-8 -*-
"""Generate a Next page component from a static Adalytical HTML page."""
import re, os, sys, importlib.util

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location("html2jsx", os.path.join(BASE_DIR, "scripts", "html2jsx.py"))
h2j = importlib.util.module_from_spec(spec); spec.loader.exec_module(h2j)

STATIC = os.path.join(BASE_DIR, "..", "adalytical")
PAGE_FN = {  # html file (no ext) -> output route dir under src/app ("" = home)
    "index": "", "services": "services", "about": "about", "case-studies": "case-studies",
    "ecommerce": "ecommerce", "lead-generation": "lead-generation", "saas": "saas",
    "landing-pages": "landing-pages", "web-development": "web-development",
}

def route_for(page, frag):
    if page == "index":
        return "/" + frag if frag else "/"
    return "/" + page + "/" + frag

def convert_page(html_name, comp_name):
    html = open(os.path.join(STATIC, html_name + ".html"), encoding="utf-8").read()
    body = re.search(r"<body[^>]*>(.*)</body>", html, re.S).group(1)
    body = re.sub(r"<script\b[^>]*>.*?</script>", "", body, flags=re.S)  # strip scripts
    jsx = h2j.convert(body)
    # X.html links -> routed template hrefs (basePath-aware)
    jsx = re.sub(r'href="([a-z0-9\-]+)\.html(#[^"]*)?"',
                 lambda m: 'href={`${BASE}%s`}' % route_for(m.group(1), m.group(2) or ""), jsx)
    # assets -> basePath template
    jsx = re.sub(r'src="images/([^"]+)"', r'src={`${BASE}/images/\1`}', jsx)
    comp = (
        '// AUTO-GENERATED from ../adalytical/%s.html — do not hand-edit; regenerate via scripts/gen_page.py\n'
        'import Script from "next/script";\n\n'
        'const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";\n\n'
        'export default function %s() {\n  return (\n    <>\n%s\n'
        '      <Script src={`${BASE}/assets/site.js`} strategy="afterInteractive" />\n'
        '    </>\n  );\n}\n'
    ) % (html_name, comp_name, jsx)
    outdir = os.path.join(BASE_DIR, "src", "app", PAGE_FN[html_name])
    os.makedirs(outdir, exist_ok=True)
    open(os.path.join(outdir, "page.tsx"), "w", encoding="utf-8").write(comp)
    print("wrote", PAGE_FN[html_name] or "(home)", "->", len(comp), "chars")

def build_sitejs():
    sjs = open(os.path.join(STATIC, "assets", "site.js"), encoding="utf-8").read()
    inline = re.findall(r"<script>(.*?)</script>", open(os.path.join(STATIC, "index.html"), encoding="utf-8").read(), re.S)
    combined = "\n".join([sjs] + inline)
    # make window-load-gated inits fire even if 'load' already happened (script runs late in Next)
    combined = combined.replace("window.addEventListener('load', ", "__onload(").replace("window.addEventListener('load',", "__onload(")
    helper = "function __onload(fn){if(document.readyState==='complete'){setTimeout(fn,0);}else{window.addEventListener('load',fn);}}\n"
    os.makedirs(os.path.join(BASE_DIR, "public", "assets"), exist_ok=True)
    open(os.path.join(BASE_DIR, "public", "assets", "site.js"), "w", encoding="utf-8").write(helper + combined)
    print("wrote public/assets/site.js", len(helper + combined), "chars")

if __name__ == "__main__":
    targets = sys.argv[1:] or ["index"]
    for t in targets:
        convert_page(t, {"index": "Home"}.get(t, "".join(w.capitalize() for w in re.split(r"[-]", t))))
    build_sitejs()
