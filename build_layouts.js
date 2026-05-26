const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'lc02-page-header.html',
    id: 'LC-02',
    title: 'Page Header',
    desc: 'Encabezado superior de las pantallas principales.',
    tag: 'Layout Containers',
    tsx: 'PageHeader.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Contenedor para el ttulo de la pgina y acciones globales. Usualmente incluye breadcrumbs.</p>',
    section_preview: `
      <div style="background:#fff; border-bottom:1px solid #D4C9B5; padding:16px 24px;">
        <div style="font-size:12px; color:#5A5A5A; margin-bottom:4px;">Contabilidad / Catlogos</div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2 style="margin:0; font-size:24px; color:#183125;">Proveedores</h2>
          <button class="siaf-btn siaf-btn-primary siaf-btn-sm">Nuevo Proveedor</button>
        </div>
      </div>
    `,
    section_props: `<tr><td><code>title</code></td><td><span class="badge-req">Req</span></td><td>-</td><td>Ttulo de la pgina</td></tr>`,
    section_code: `&lt;<span class="tp">PageHeader</span> <span class="at">title</span>=<span class="str">"Proveedores"</span> /&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Crear componente que reciba title y children (para los botones).</div></div>`,
    do_body: `<div>Usar para el ttulo principal h1.</div>`,
    do_desc: `Mantiene consistencia.`,
    dont_body: `<div>Mltiples PageHeaders en una vista.</div>`,
    dont_desc: `Solo uno por pgina.`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'lc03-card.html',
    id: 'LC-03',
    title: 'Card',
    desc: 'Contenedor blanco con borde.',
    tag: 'Layout Containers',
    tsx: 'SiafCard.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>El contenedor de informacin ms comn. Separa visualmente el contenido del fondo crema de la aplicacin.</p>',
    section_preview: `
      <div style="background:#fff; border:1px solid #D4C9B5; border-radius:6px; box-shadow:0 1px 3px rgba(0,0,0,0.05); padding:16px; max-width:400px;">
        <h3 style="margin:0 0 12px 0; font-size:16px; color:#183125;">Ttulo del Card</h3>
        <p style="margin:0; font-size:14px; color:#5A5A5A;">Contenido de ejemplo dentro del card.</p>
      </div>
    `,
    section_props: `
      <tr><td><code>title</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>Ttulo en la parte superior</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafCard</span> <span class="at">title</span>=<span class="str">"Informacin"</span>&gt;...&lt;/<span class="tp">SiafCard</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Implementar padding consistente y radius (6px o 8px).</div></div>`,
    do_body: `<div>Card con borde sutil.</div>`,
    do_desc: `Usar la variable de borde.`,
    dont_body: `<div>Card con sombra extrema.</div>`,
    dont_desc: `Evitar sombras muy oscuras.`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'lc04-section.html',
    id: 'LC-04',
    title: 'Section',
    desc: 'Agrupacin lgica.',
    tag: 'Layout Containers',
    tsx: 'SiafSection.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Agrupador visual ms sutil que el Card, usado para dividir grandes bloques de contenido dentro del mismo contenedor.</p>',
    section_preview: `
      <div style="padding:16px; border-bottom:1px solid #D4C9B5;">
        <h4 style="margin:0 0 8px 0; color:#183125;">Seccin 1</h4>
        <div style="color:#5a5a5a; font-size:14px;">Contenido de seccin</div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `&lt;<span class="tp">SiafSection</span>&gt;...&lt;/<span class="tp">SiafSection</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>Divisin lgica</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'lc05-barra-ventana.html',
    id: 'LC-05',
    title: 'Barra Ventana',
    desc: 'Cabecera de ventanas modales o paneles.',
    tag: 'Layout Containers',
    tsx: 'WindowBar.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Barra superior para arrastrar modales o identificar paneles tipo ventana.</p>',
    section_preview: `
      <div style="background:#183125; color:#fff; padding:8px 16px; display:flex; justify-content:space-between;">
        <span>Ttulo Ventana</span>
        <span>X</span>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `&lt;<span class="tp">WindowBar</span>&gt;...&lt;/<span class="tp">WindowBar</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Usar verde oscuro.</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'lc06-barra-acciones.html',
    id: 'LC-06',
    title: 'Barra Acciones',
    desc: 'Footer de modales o formularios.',
    tag: 'Layout Containers',
    tsx: 'ActionBar.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Contenedor de botones de accin (Guardar, Cancelar).</p>',
    section_preview: `
      <div style="background:#f5f0e8; padding:16px; display:flex; justify-content:flex-end; gap:8px;">
        <button class="siaf-btn siaf-btn-secondary">Cancelar</button>
        <button class="siaf-btn siaf-btn-primary">Aceptar</button>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `&lt;<span class="tp">ActionBar</span>&gt;...&lt;/<span class="tp">ActionBar</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Fondo ligeramente diferente para contraste.</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'lc07-toolbar-grid.html',
    id: 'LC-07',
    title: 'Toolbar Grid',
    desc: 'Herramientas sobre una tabla.',
    tag: 'Layout Containers',
    tsx: 'GridToolbar.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Buscador, filtros y botones de accin encima de un DataGrid.</p>',
    section_preview: `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #D4C9B5; margin-bottom:16px;">
        <div style="display:flex; gap:8px;">
          <input type="text" class="siaf-input" placeholder="Buscar..." style="height:32px;">
          <button class="siaf-btn siaf-btn-secondary siaf-btn-sm">Filtrar</button>
        </div>
        <div>
          <button class="siaf-btn siaf-btn-ghost siaf-btn-sm">Exportar</button>
        </div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `&lt;<span class="tp">GridToolbar</span>&gt;...&lt;/<span class="tp">GridToolbar</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Mantener alineacin vertical.</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'lc08-form-group.html',
    id: 'LC-08',
    title: 'Form Group',
    desc: 'Agrupacin lgica de campos.',
    tag: 'Layout Containers',
    tsx: 'SiafFormGroup.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Asocia una etiqueta (label) con su input y sus mensajes de error o hint, manteniendo mrgenes estandarizados.</p>',
    section_preview: `
      <div style="margin-bottom:16px;">
        <label style="display:block; font-size:12px; font-weight:600; margin-bottom:4px;">Campo Ejemplo</label>
        <input type="text" class="siaf-input">
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `&lt;<span class="tp">SiafFormGroup</span>&gt;...&lt;/<span class="tp">SiafFormGroup</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
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

    <div class="doc-section">
      <div class="section-title"><span class="section-num">1</span> Descripcin</div>
      \${section_desc}
    </div>

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

    <div class="doc-section">
      <div class="section-title"><span class="section-num">3</span> Tokens / Propiedades</div>
      <table class="props-table">
        <thead><tr><th>Prop</th><th>Tipo</th><th>Default</th><th>Descripcin</th></tr></thead>
        <tbody>
          \${section_props}
        </tbody>
      </table>
    </div>

    <div class="doc-section">
      <div class="section-title"><span class="section-num">4</span> Cdigo de implementacin</div>
      <div class="code-wrap">
        <div class="code-tabs"><button class="code-tab active">TSX - \${tsx}</button></div>
        <div class="code-block" id="code-main-\${id}">
          <button class="copy-btn" onclick="copyCode('code-main-\${id}',this)">Copiar</button>
          <pre>\${section_code}</pre>
        </div>
      </div>
    </div>

    <div class="doc-section">
      <div class="section-title"><span class="section-num">5</span> Instrucciones para Daryl - qu construir</div>
      \${section_instructions}
    </div>

    <div class="doc-section">
      <div class="section-title"><span class="section-num">6</span> Do / Don't</div>
      <div class="do-dont">
        <div class="do-card">
          <div class="do-head">Correcto</div>
          <div class="do-body" style="align-items:center;justify-content:center;padding:32px 20px;">\${do_body}</div>
          <div class="do-desc">\${do_desc}</div>
        </div>
        <div class="dont-card">
          <div class="dont-head">Incorrecto</div>
          <div class="dont-body" style="align-items:center;justify-content:center;padding:32px 20px;">\${dont_body}</div>
          <div class="dont-desc">\${dont_desc}</div>
        </div>
      </div>
    </div>

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
  
  content = content.replace(/<title>.*?<\/title>/g, `<title>${page.id} - ${page.title} - UI_PJEV</title>`);

  const split1 = content.split('<div class="doc-main-inner">');
  const split2 = content.split('<div class="doc-footer">');
  
  if (split1.length < 2 || split2.length < 2) {
    console.log('Could not parse layout for', page.filename);
    return;
  }
  
  const headerPart = split1[0] + '<div class="doc-main-inner">\\n';
  const footerPart = '\\n    <div class="doc-footer">' + split2[1];
  
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
console.log('Done layouts.');
