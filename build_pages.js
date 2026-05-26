const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'fm01-leer.html',
    id: 'FM-01',
    title: 'Catlogo / Lectura',
    desc: 'Vista estndar de listado.',
    tag: 'Formularios / Modelos',
    tsx: 'page.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Patrn visual para la pgina principal de un mdulo o catlogo. Se compone de Page Header, Toolbar, y DataGrid.</p>',
    section_preview: `
      <div style="border:1px solid #D4C9B5; border-radius:4px; max-width:500px; background:#f5f0e8;">
        <div style="background:#fff; border-bottom:1px solid #D4C9B5; padding:12px; display:flex; justify-content:space-between;">
          <h2 style="margin:0; font-size:16px;">Proveedores</h2>
          <button class="siaf-btn siaf-btn-primary siaf-btn-sm">Nuevo</button>
        </div>
        <div style="padding:16px;">
          <div style="background:#fff; border:1px solid #D4C9B5; padding:12px; border-radius:4px; margin-bottom:12px; display:flex; justify-content:space-between;">
            <input type="text" class="siaf-input" placeholder="Buscar..." style="height:28px;">
          </div>
          <div style="background:#fff; border:1px solid #D4C9B5; border-radius:4px; height:100px; display:flex; align-items:center; justify-content:center; color:#5a5a5a;">
            DataGrid aqu
          </div>
        </div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `&lt;<span class="tp">PageLayout</span>&gt;\n  &lt;<span class="tp">PageHeader</span> /&gt;\n  &lt;<span class="tp">PageContent</span>&gt;\n    &lt;<span class="tp">GridToolbar</span> /&gt;\n    &lt;<span class="tp">SiafDataGrid</span> /&gt;\n  &lt;/<span class="tp">PageContent</span>&gt;\n&lt;/<span class="tp">PageLayout</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'fm02-leer-acciones.html',
    id: 'FM-02',
    title: 'Catlogo c/ Acciones',
    desc: 'Listado con multi-seleccin.',
    tag: 'Formularios / Modelos',
    tsx: 'page.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Extensin del FM-01 que incluye checkboxes de seleccin y un panel de acciones masivas sobre el grid.</p>',
    section_preview: `
      <div style="border:1px solid #D4C9B5; border-radius:4px; max-width:500px; background:#f5f0e8;">
        <div style="padding:16px;">
          <div style="background:#fff; border:1px solid #D4C9B5; padding:8px 12px; border-radius:4px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:12px; font-weight:600; color:#183125;">3 seleccionados</span>
            <div style="display:flex; gap:8px;">
              <button class="siaf-btn siaf-btn-danger siaf-btn-sm">Eliminar masivo</button>
            </div>
          </div>
          <div style="background:#fff; border:1px solid #D4C9B5; border-radius:4px; height:100px; display:flex; align-items:center; justify-content:center; color:#5a5a5a;">
            DataGrid (con checkboxes)
          </div>
        </div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// Manejo de estado rowSelection en TanStack Table`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'fm03-crud-simple.html',
    id: 'FM-03',
    title: 'Crear/Editar Simple',
    desc: 'Formulario en 1 o 2 columnas.',
    tag: 'Formularios / Modelos',
    tsx: 'page.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Diseo para formularios cortos (menos de 15 campos) que no requieren mltiples pasos ni agrupaciones complejas. Usualmente dentro de un Card.</p>',
    section_preview: `
      <div style="background:#fff; border:1px solid #D4C9B5; border-radius:6px; padding:16px; max-width:400px;">
        <h3 style="margin:0 0 16px 0; font-size:16px;">Nuevo Registro</h3>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div style="background:#e8e3da; height:28px; border-radius:4px;"></div>
          <div style="background:#e8e3da; height:28px; border-radius:4px;"></div>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:16px; padding-top:16px; border-top:1px solid #D4C9B5;">
          <button class="siaf-btn siaf-btn-secondary siaf-btn-sm">Cancelar</button>
          <button class="siaf-btn siaf-btn-primary siaf-btn-sm">Guardar</button>
        </div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `&lt;<span class="tp">SiafCard</span>&gt;\n  &lt;<span class="tp">form</span>&gt;...&lt;/<span class="tp">form</span>&gt;\n&lt;/<span class="tp">SiafCard</span>&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'fm04-crud-compuesto.html',
    id: 'FM-04',
    title: 'Crear/Editar Compuesto',
    desc: 'Maestro-Detalle o formularios muy largos.',
    tag: 'Formularios / Modelos',
    tsx: 'page.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Para flujos complejos como Plizas, donde hay una cabecera (maestro) y lneas de detalle en una tabla, o formularios tabulados.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px; max-width:500px;">
        <div style="background:#fff; border:1px solid #D4C9B5; border-radius:6px; padding:16px;">
          <h4 style="margin:0 0 8px 0; font-size:14px;">Cabecera</h4>
          <div style="background:#e8e3da; height:40px; border-radius:4px;"></div>
        </div>
        <div style="background:#fff; border:1px solid #D4C9B5; border-radius:6px; padding:16px;">
          <h4 style="margin:0 0 8px 0; font-size:14px;">Lneas (Detalle)</h4>
          <div style="background:#f5f0e8; height:80px; border:1px solid #D4C9B5;"></div>
        </div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// Uso de mdulos complejos con Form Context`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'pm01-dashboard.html',
    id: 'PM-01',
    title: 'Dashboard',
    desc: 'Pantalla de inicio con mtricas.',
    tag: 'Pginas Especiales',
    tsx: 'page.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Vista principal con widgets de KPI y grficos.</p>',
    section_preview: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; max-width:500px;">
        <div style="background:#fff; border:1px solid #D4C9B5; padding:16px; border-radius:6px;">KPI 1</div>
        <div style="background:#fff; border:1px solid #D4C9B5; padding:16px; border-radius:6px;">KPI 2</div>
        <div style="grid-column: span 2; background:#fff; border:1px solid #D4C9B5; padding:16px; border-radius:6px; height:100px;">Grfico</div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// Grid de widgets`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'pm02-404.html',
    id: 'PM-02',
    title: 'Pgina No Encontrada',
    desc: 'Error 404 estandarizado.',
    tag: 'Pginas Especiales',
    tsx: 'not-found.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Feedback visual cuando una ruta no existe.</p>',
    section_preview: `
      <div style="text-align:center; padding:48px;">
        <div style="font-size:48px; font-weight:700; color:#DEAC50;">404</div>
        <h2>Pgina no encontrada</h2>
        <button class="siaf-btn siaf-btn-primary">Ir al inicio</button>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// next/navigation not-found`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'pm03-403.html',
    id: 'PM-03',
    title: 'Acceso Denegado',
    desc: 'Error 403 estandarizado.',
    tag: 'Pginas Especiales',
    tsx: 'error.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Feedback visual cuando el usuario no tiene permisos para la ruta actual.</p>',
    section_preview: `
      <div style="text-align:center; padding:48px;">
        <div style="font-size:48px; font-weight:700; color:#5e111a;">403</div>
        <h2>Acceso Denegado</h2>
        <button class="siaf-btn siaf-btn-primary">Volver atrs</button>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// Manejo de roles y permisos`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'pm04-500.html',
    id: 'PM-04',
    title: 'Error de Servidor',
    desc: 'Error 500 estandarizado.',
    tag: 'Pginas Especiales',
    tsx: 'error.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Fallback UI para excepciones no manejadas en la aplicacin React.</p>',
    section_preview: `
      <div style="text-align:center; padding:48px;">
        <div style="font-size:48px; font-weight:700; color:#183125;">500</div>
        <h2>Ocurri un error inesperado</h2>
        <button class="siaf-btn siaf-btn-primary">Reintentar</button>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// nextjs error.tsx boundary`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'pm05-login.html',
    id: 'PM-05',
    title: 'Login',
    desc: 'Pantalla de autenticacin.',
    tag: 'Pginas Especiales',
    tsx: 'login/page.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>nica pgina que no utiliza el layout principal de la aplicacin. Muestra una vista centrada de inicio de sesin.</p>',
    section_preview: `
      <div style="background:#183125; min-height:200px; display:flex; align-items:center; justify-content:center;">
        <div style="background:#fff; padding:24px; border-radius:8px; width:300px; text-align:center;">
          <h3>Logo PJEV</h3>
          <div style="height:32px; background:#e8e3da; margin:16px 0;"></div>
          <div style="height:32px; background:#e8e3da; margin:16px 0;"></div>
          <button class="siaf-btn siaf-btn-primary" style="width:100%;">Entrar</button>
        </div>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// Layout vaco`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'pm06-sin-ejercicio.html',
    id: 'PM-06',
    title: 'Seleccin de Ejercicio',
    desc: 'Filtro obligatorio inicial.',
    tag: 'Pginas Especiales',
    tsx: 'ejercicio/page.tsx',
    status_class: 'nuevo',
    status_text: 'Patrn',
    preview_area_class: '',
    section_desc: '<p>Bloqueo de la UI hasta que el usuario especifica con qu Ejercicio Fiscal desea trabajar.</p>',
    section_preview: `
      <div style="text-align:center; padding:48px; background:#fff; border:1px solid #D4C9B5; border-radius:8px; max-width:400px; margin:0 auto;">
        <h3>Selecciona el Ejercicio Fiscal</h3>
        <select class="siaf-select" style="margin:16px 0;"><option>2026</option></select>
        <button class="siaf-btn siaf-btn-primary">Continuar</button>
      </div>
    `,
    section_props: `<tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>`,
    section_code: `// Guardar en Context / Cookie`,
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
console.log('Done pages.');
