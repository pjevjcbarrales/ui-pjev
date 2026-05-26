const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'f01-tokens.html',
    id: 'F-01',
    title: 'Tokens CSS',
    desc: 'Variables CSS (Custom Properties) de color y bordes.',
    tag: 'Foundations',
    tsx: 'globals.css',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Los Design Tokens son los valores atómicos del sistema visual. Se definen como Custom Properties de CSS (variables) en <code>globals.css</code> para garantizar consistencia en todo el proyecto.</p>',
    section_preview: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px;">
        <!-- Primario -->
        <div>
          <div style="background:#183125; width:100%; height:60px; border-radius:6px 6px 0 0;"></div>
          <div style="padding:8px 12px; background:#fff; border:1px solid #D4C9B5; border-top:none; border-radius:0 0 6px 6px;">
            <div style="font-size:11px; font-weight:700; color:#183125;">--pjev-verde-oscuro</div>
            <div style="font-size:10px; color:#5A5A5A; font-family:monospace;">#183125</div>
          </div>
        </div>
        <!-- Secundario -->
        <div>
          <div style="background:#254a37; width:100%; height:60px; border-radius:6px 6px 0 0;"></div>
          <div style="padding:8px 12px; background:#fff; border:1px solid #D4C9B5; border-top:none; border-radius:0 0 6px 6px;">
            <div style="font-size:11px; font-weight:700; color:#183125;">--pjev-verde-medio</div>
            <div style="font-size:10px; color:#5A5A5A; font-family:monospace;">#254a37</div>
          </div>
        </div>
        <!-- Dorado -->
        <div>
          <div style="background:#DEAC50; width:100%; height:60px; border-radius:6px 6px 0 0;"></div>
          <div style="padding:8px 12px; background:#fff; border:1px solid #D4C9B5; border-top:none; border-radius:0 0 6px 6px;">
            <div style="font-size:11px; font-weight:700; color:#183125;">--pjev-dorado</div>
            <div style="font-size:10px; color:#5A5A5A; font-family:monospace;">#DEAC50</div>
          </div>
        </div>
        <!-- Crema -->
        <div>
          <div style="background:#F5F0E8; width:100%; height:60px; border-radius:6px 6px 0 0; border:1px solid #D4C9B5; border-bottom:none;"></div>
          <div style="padding:8px 12px; background:#fff; border:1px solid #D4C9B5; border-top:none; border-radius:0 0 6px 6px;">
            <div style="font-size:11px; font-weight:700; color:#183125;">--pjev-crema</div>
            <div style="font-size:10px; color:#5A5A5A; font-family:monospace;">#F5F0E8</div>
          </div>
        </div>
        <!-- Rojo vino -->
        <div>
          <div style="background:#5e111a; width:100%; height:60px; border-radius:6px 6px 0 0;"></div>
          <div style="padding:8px 12px; background:#fff; border:1px solid #D4C9B5; border-top:none; border-radius:0 0 6px 6px;">
            <div style="font-size:11px; font-weight:700; color:#183125;">--pjev-rojo-vino</div>
            <div style="font-size:10px; color:#5A5A5A; font-family:monospace;">#5e111a</div>
          </div>
        </div>
        <!-- Borde -->
        <div>
          <div style="background:#D4C9B5; width:100%; height:60px; border-radius:6px 6px 0 0;"></div>
          <div style="padding:8px 12px; background:#fff; border:1px solid #D4C9B5; border-top:none; border-radius:0 0 6px 6px;">
            <div style="font-size:11px; font-weight:700; color:#183125;">--pjev-borde</div>
            <div style="font-size:10px; color:#5A5A5A; font-family:monospace;">#D4C9B5</div>
          </div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>--pjev-verde-oscuro</code></td><td>Color</td><td><code>#183125</code></td><td>Color principal (botones primary, headers)</td></tr>
      <tr><td><code>--pjev-dorado</code></td><td>Color</td><td><code>#DEAC50</code></td><td>Color de acento</td></tr>
      <tr><td><code>--pjev-rojo-vino</code></td><td>Color</td><td><code>#5e111a</code></td><td>Color destructivo / danger</td></tr>
      <tr><td><code>--pjev-crema</code></td><td>Color</td><td><code>#F5F0E8</code></td><td>Fondo de aplicación</td></tr>
      <tr><td><code>--pjev-borde</code></td><td>Color</td><td><code>#D4C9B5</code></td><td>Bordes de tarjetas, inputs y tablas</td></tr>
      <tr><td><code>--pjev-texto</code></td><td>Color</td><td><code>#1A1A1A</code></td><td>Texto principal</td></tr>
      <tr><td><code>--pjev-texto-muted</code></td><td>Color</td><td><code>#5A5A5A</code></td><td>Texto secundario / hints</td></tr>
    `,
    section_code: `<span class="kw">:root</span> {
  <span class="cm">/* Colores de Marca */</span>
  <span class="at">--pjev-verde-oscuro</span>: <span class="str">#183125</span>;
  <span class="at">--pjev-verde-medio</span>: <span class="str">#254a37</span>;
  <span class="at">--pjev-dorado</span>: <span class="str">#DEAC50</span>;
  <span class="at">--pjev-crema</span>: <span class="str">#F5F0E8</span>;
  <span class="at">--pjev-blanco</span>: <span class="str">#FFFFFF</span>;
  <span class="at">--pjev-rojo-vino</span>: <span class="str">#5e111a</span>;

  <span class="cm">/* UI */</span>
  <span class="at">--pjev-borde</span>: <span class="str">#D4C9B5</span>;
  <span class="at">--pjev-texto</span>: <span class="str">#1A1A1A</span>;
  <span class="at">--pjev-texto-muted</span>: <span class="str">#5A5A5A</span>;
}`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          <strong>Checklist para Daryl:</strong><br>
          1. Asegúrate de que TODAS estas variables estén definidas en el <code>:root</code> de tu CSS global (ej: <code>app/globals.css</code> o <code>_pjev-tokens.css</code>).<br>
          2. Reemplazar CUALQUIER hex code hardcodeado en el proyecto por el uso de <code>var(--nombre)</code>.
        </div>
      </div>
    `,
    do_body: `<div style="padding:10px; background:var(--pjev-verde-oscuro); color:#fff;">Fondo correcto</div>`,
    do_desc: `Usar las variables CSS para todos los colores: <code>background: var(--pjev-verde-oscuro);</code>`,
    dont_body: `<div style="padding:10px; background:#183125; color:#fff;">Fondo incorrecto</div>`,
    dont_desc: `No usar colores hexadecimales quemados en el código. Esto rompe la consistencia si el color cambia.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Múltiples componentes que declaran <code>const COLORS = { green: '#285847', ... }</code> en JavaScript.</div>
      </div>
    `
  },
  {
    filename: 'f02-tipografia.html',
    id: 'F-02',
    title: 'Tipografía',
    desc: 'Escala tipográfica y jerarquía de texto.',
    tag: 'Foundations',
    tsx: 'globals.css',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>El sistema utiliza la fuente <strong>Inter</strong> de Google Fonts como tipografía principal por su excelente legibilidad en interfaces de datos. Las jerarquías se rigen por clases semánticas.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:24px;">
        <div>
          <div style="font-size:10px; color:#5A5A5A; margin-bottom:4px; font-family:monospace;">h1 / .pjev-h1 (26px, bold, verde oscuro)</div>
          <h1 style="font-size:26px; font-weight:700; color:#183125; margin:0;">Sistema de Información</h1>
        </div>
        <div>
          <div style="font-size:10px; color:#5A5A5A; margin-bottom:4px; font-family:monospace;">h2 / .pjev-h2 (18px, bold, verde oscuro)</div>
          <h2 style="font-size:18px; font-weight:700; color:#183125; margin:0;">Módulo de Contabilidad</h2>
        </div>
        <div>
          <div style="font-size:10px; color:#5A5A5A; margin-bottom:4px; font-family:monospace;">.pjev-body (14px, regular, texto)</div>
          <p style="font-size:14px; font-weight:400; color:#1A1A1A; margin:0;">Este es un párrafo de texto normal que se utiliza para descripciones largas, instrucciones o contenido principal de las vistas.</p>
        </div>
        <div>
          <div style="font-size:10px; color:#5A5A5A; margin-bottom:4px; font-family:monospace;">.pjev-label (12px, semi-bold, texto)</div>
          <label style="font-size:12px; font-weight:600; color:#1A1A1A;">Fecha de alta</label>
        </div>
        <div>
          <div style="font-size:10px; color:#5A5A5A; margin-bottom:4px; font-family:monospace;">.pjev-small (12px, regular, texto-muted)</div>
          <span style="font-size:12px; font-weight:400; color:#5A5A5A;">345 registros encontrados</span>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>.pjev-h1</code></td><td>Clase CSS</td><td><code>26px</code></td><td>Títulos principales de página</td></tr>
      <tr><td><code>.pjev-h2</code></td><td>Clase CSS</td><td><code>18px</code></td><td>Subtítulos y nombres de paneles</td></tr>
      <tr><td><code>.pjev-body</code></td><td>Clase CSS</td><td><code>14px</code></td><td>Texto estándar</td></tr>
      <tr><td><code>.pjev-small</code></td><td>Clase CSS</td><td><code>12px</code></td><td>Metadatos, hints, conteos</td></tr>
      <tr><td><code>.pjev-label</code></td><td>Clase CSS</td><td><code>12px</code></td><td>Etiquetas de formularios</td></tr>
    `,
    section_code: `<span class="cm">/* Recomendado: import de Inter en el root layout o globals.css */</span>
<span class="kw">@import</span> <span class="at">url</span>(<span class="str">'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'</span>);

<span class="kw">body</span> {
  <span class="at">font-family</span>: <span class="str">'Inter'</span>, sans-serif;
  <span class="at">color</span>: <span class="str">var(--pjev-texto)</span>;
}`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          Instalar la fuente en el proyecto Next.js preferentemente usando <code>next/font/google</code>:
          <br><code>import { Inter } from 'next/font/google'</code>
        </div>
      </div>
    `,
    do_body: `<h2 class="pjev-h2" style="font-size:18px;font-weight:bold;color:#183125;">Sección correcta</h2>`,
    do_desc: `Usar clases semánticas para los títulos.`,
    dont_body: `<div style="font-size: 22px; color: #000;">Sección incorrecta</div>`,
    dont_desc: `No usar tamaños de fuente arbitrarios.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Páginas usando <code>h1</code> con el estilo por defecto del navegador.</div>
      </div>
    `
  },
  {
    filename: 'f03-espaciado.html',
    id: 'F-03',
    title: 'Espaciado',
    desc: 'Escala de espacios (padding, margin, gap).',
    tag: 'Foundations',
    tsx: 'globals.css',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>El sistema utiliza una escala de espaciado base de 4px para garantizar un ritmo vertical y horizontal consistente.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:100px; font-family:monospace; font-size:12px;">xs (4px)</div>
          <div style="background:#DEAC50; opacity:0.5; height:24px; width:4px;"></div>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:100px; font-family:monospace; font-size:12px;">sm (8px)</div>
          <div style="background:#DEAC50; opacity:0.5; height:24px; width:8px;"></div>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:100px; font-family:monospace; font-size:12px;">md (16px)</div>
          <div style="background:#DEAC50; opacity:0.6; height:24px; width:16px;"></div>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:100px; font-family:monospace; font-size:12px;">lg (24px)</div>
          <div style="background:#DEAC50; opacity:0.7; height:24px; width:24px;"></div>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:100px; font-family:monospace; font-size:12px;">xl (32px)</div>
          <div style="background:#DEAC50; opacity:0.8; height:24px; width:32px;"></div>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:100px; font-family:monospace; font-size:12px;">2xl (48px)</div>
          <div style="background:#DEAC50; opacity:0.9; height:24px; width:48px;"></div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>--pjev-space-xs</code></td><td>Espaciado</td><td><code>4px</code></td><td>Gaps internos mínimos</td></tr>
      <tr><td><code>--pjev-space-sm</code></td><td>Espaciado</td><td><code>8px</code></td><td>Gaps entre componentes hermanos</td></tr>
      <tr><td><code>--pjev-space-md</code></td><td>Espaciado</td><td><code>16px</code></td><td>Padding de cards y grupos</td></tr>
      <tr><td><code>--pjev-space-lg</code></td><td>Espaciado</td><td><code>24px</code></td><td>Márgenes entre secciones</td></tr>
      <tr><td><code>--pjev-space-xl</code></td><td>Espaciado</td><td><code>32px</code></td><td>Separación mayor</td></tr>
    `,
    section_code: `<span class="kw">:root</span> {
  <span class="at">--pjev-space-xs</span>: <span class="str">4px</span>;
  <span class="at">--pjev-space-sm</span>: <span class="str">8px</span>;
  <span class="at">--pjev-space-md</span>: <span class="str">16px</span>;
  <span class="at">--pjev-space-lg</span>: <span class="str">24px</span>;
  <span class="at">--pjev-space-xl</span>: <span class="str">32px</span>;
  <span class="at">--pjev-space-2xl</span>: <span class="str">48px</span>;
}`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Implementar estas variables en el archivo CSS global para usarlas en padding, margin y gap.</div>
      </div>
    `,
    do_body: `<div style="display:flex; gap:16px;"><span>Item 1</span><span>Item 2</span></div>`,
    do_desc: `Usar la variable de espaciado o la clase utilitaria para separar elementos de forma consistente.`,
    dont_body: `<div style="display:flex; gap:15px;"><span>Item 1</span><span>Item 2</span></div>`,
    dont_desc: `No usar números arbitrarios que no pertenezcan a la escala.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Uso indiscriminado de <code>&lt;br&gt;&lt;br&gt;</code> para crear espaciado vertical.</div>
      </div>
    `
  },
  {
    filename: 'f04-iconografia.html',
    id: 'F-04',
    title: 'Iconografía',
    desc: 'Librería de iconos y convenciones de uso.',
    tag: 'Foundations',
    tsx: 'Lucide React',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>El sistema utiliza <strong>Lucide React</strong> como la única librería de iconos permitida. Los iconos deben mantener un grosor de trazo de 2px (stroke-width: 2).</p>',
    section_preview: `
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap:16px; text-align:center;">
        <div style="padding:16px; border:1px solid #D4C9B5; border-radius:6px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#183125" stroke-width="2" style="margin-bottom:8px;"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          <div style="font-size:11px; font-family:monospace;">Plus</div>
        </div>
        <div style="padding:16px; border:1px solid #D4C9B5; border-radius:6px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#183125" stroke-width="2" style="margin-bottom:8px;"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
          <div style="font-size:11px; font-family:monospace;">Pencil</div>
        </div>
        <div style="padding:16px; border:1px solid #D4C9B5; border-radius:6px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e111a" stroke-width="2" style="margin-bottom:8px;"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          <div style="font-size:11px; font-family:monospace;">Trash2</div>
        </div>
        <div style="padding:16px; border:1px solid #D4C9B5; border-radius:6px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#183125" stroke-width="2" style="margin-bottom:8px;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <div style="font-size:11px; font-family:monospace;">Search</div>
        </div>
        <div style="padding:16px; border:1px solid #D4C9B5; border-radius:6px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#183125" stroke-width="2" style="margin-bottom:8px;"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          <div style="font-size:11px; font-family:monospace;">Filter</div>
        </div>
        <div style="padding:16px; border:1px solid #D4C9B5; border-radius:6px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#183125" stroke-width="2" style="margin-bottom:8px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <div style="font-size:11px; font-family:monospace;">Download</div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>size</code></td><td>Propiedad</td><td><code>14</code> / <code>16</code></td><td>Tamaño en píxeles. 14px para botones sm, 16px para md.</td></tr>
      <tr><td><code>strokeWidth</code></td><td>Propiedad</td><td><code>2</code></td><td>No modificar, el default es correcto.</td></tr>
    `,
    section_code: `<span class="kw">import</span> { <span class="tp">Plus</span>, <span class="tp">Trash2</span> } <span class="kw">from</span> <span class="str">'lucide-react'</span>;

<span class="cm">// Uso en un botn de 14px</span>
&lt;<span class="tp">Plus</span> <span class="at">size</span>={14} /&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>NUNCA importar FontAwesome, Bootstrap Icons, o usar PNGs para íconos UI. Siempre importar íconos específicos de <code>lucide-react</code>.</div>
      </div>
    `,
    do_body: `<div style="display:flex;align-items:center;gap:4px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Agregar</div>`,
    do_desc: `Importar el ícono directamente de <code>lucide-react</code>.`,
    dont_body: `<div><i class="fas fa-plus"></i> Agregar</div>`,
    dont_desc: `No usar <code>&lt;i&gt;</code> con clases de otras librerías.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Uso de SVG paths crudos harcodeados dentro del JSX sin envolver en un componente.</div>
      </div>
    `
  }
];

const mainTemplate = `
    <div class="elem-breadcrumb">
      <a href="index.html">UI_PJEV</a> ›
      <span>\${tag}</span> ›
      <span>\${title}</span>
    </div>

    <div class="elem-header">
      <div>
        <div class="elem-id">\${id}</div>
        <h1 class="elem-title">\${title}</h1>
        <p class="elem-desc">\${desc}</p>
        <div class="elem-meta">
          <span class="elem-tag">\${tag}</span>
          <span class="elem-tag tsx">\${tsx}</span>
        </div>
      </div>
      <span class="status-badge \${status_class}">\${status_text}</span>
    </div>

    <!-- 1. DESCRIPCIÓN -->
    <div class="doc-section">
      <div class="section-title"><span class="section-num">1</span> Descripción</div>
      \${section_desc}
    </div>

    <!-- 2. PREVIEW -->
    <div class="doc-section">
      <div class="section-title"><span class="section-num">2</span> Preview</div>
      <div class="preview-box">
        <div class="preview-bar">
          <span class="preview-bar-label">Preview interactivo</span>
          <span class="preview-bar-tag">Usa clases .siaf-* reales</span>
        </div>
        <div class="preview-area \${preview_area_class}">
          \${section_preview}
        </div>
      </div>
    </div>

    <!-- 3. PROPIEDADES -->
    <div class="doc-section">
      <div class="section-title"><span class="section-num">3</span> Tokens / Propiedades</div>
      <table class="props-table">
        <thead><tr><th>Prop</th><th>Tipo</th><th>Default</th><th>Descripción</th></tr></thead>
        <tbody>
          \${section_props}
        </tbody>
      </table>
    </div>

    <!-- 4. CÓDIGO -->
    <div class="doc-section">
      <div class="section-title"><span class="section-num">4</span> Código de implementación</div>
      <div class="code-wrap">
        <div class="code-tabs"><button class="code-tab active">TSX — \${tsx}</button></div>
        <div class="code-block" id="code-main-\${id}">
          <button class="copy-btn" onclick="copyCode('code-main-\${id}',this)">Copiar</button>
          <pre>\${section_code}</pre>
        </div>
      </div>
    </div>

    <!-- 5. INSTRUCCIONES PARA DARYL -->
    <div class="doc-section">
      <div class="section-title"><span class="section-num">5</span> Instrucciones para Daryl — qué construir</div>
      \${section_instructions}
    </div>

    <!-- 6. DO / DON'T -->
    <div class="doc-section">
      <div class="section-title"><span class="section-num">6</span> Do / Don't</div>
      <div class="do-dont">
        <div class="do-card">
          <div class="do-head">✓ Correcto</div>
          <div class="do-body" style="align-items:center;justify-content:center;padding:32px 20px;">\${do_body}</div>
          <div class="do-desc">\${do_desc}</div>
        </div>
        <div class="dont-card">
          <div class="dont-head">✕ Incorrecto</div>
          <div class="dont-body" style="align-items:center;justify-content:center;padding:32px 20px;">\${dont_body}</div>
          <div class="dont-desc">\${dont_desc}</div>
        </div>
      </div>
    </div>

    <!-- 7. DEPRECADOS -->
    <div class="doc-section">
      <div class="section-title"><span class="section-num">7</span> Patrones deprecados en el sistema actual</div>
      \${section_deprecated}
    </div>
`;

function processFile(page) {
  const filePath = path.join(__dirname, page.filename);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping (not found):', filePath);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the title
  content = content.replace(/<title>.*?<\/title>/g, `<title>${page.id} · ${page.title} — UI_PJEV</title>`);

  // Split at <div class="doc-main-inner"> and <div class="doc-footer">
  const split1 = content.split('<div class="doc-main-inner">');
  const split2 = content.split('<div class="doc-footer">');
  
  if (split1.length < 2 || split2.length < 2) {
    console.log('Could not parse layout for', page.filename);
    return;
  }
  
  const headerPart = split1[0] + '<div class="doc-main-inner">\\n';
  const footerPart = '\\n    <div class="doc-footer">' + split2[1];
  
  // Interpolate the template
  let newMain = mainTemplate;
  for (const [key, value] of Object.entries(page)) {
    const regex = new RegExp('\\$\\{\\s*' + key + '\\s*\\}', 'g');
    newMain = newMain.replace(regex, value);
  }
  
  const finalContent = headerPart + newMain + footerPart;
  fs.writeFileSync(filePath, finalContent, 'utf8');
  console.log('Processed:', page.filename);
}

for (const page of pages) {
  processFile(page);
}
console.log('Done foundations.');
