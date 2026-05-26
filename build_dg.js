const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'dg01-grid-base.html',
    id: 'DG-01',
    title: 'DataGrid Base',
    desc: 'Estructura principal de tablas de datos.',
    tag: 'Data Grid',
    tsx: 'SiafDataGrid.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Componente central para la visualización de listas de registros (catálogos y transacciones). Muestra encabezados estandarizados y filas con separación sutil (bordes horizontales o zebras).</p>',
    section_preview: `
      <div style="border:1px solid #D4C9B5; border-radius:6px; overflow:hidden;">
        <table style="width:100%; border-collapse:collapse; text-align:left;">
          <thead style="background:#f5f0e8; border-bottom:1px solid #D4C9B5;">
            <tr>
              <th style="padding:12px 16px; font-size:12px; color:#5a5a5a; font-weight:600;">Clave</th>
              <th style="padding:12px 16px; font-size:12px; color:#5a5a5a; font-weight:600;">Nombre</th>
              <th style="padding:12px 16px; font-size:12px; color:#5a5a5a; font-weight:600; text-align:right;">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #D4C9B5;">
              <td style="padding:12px 16px; font-size:14px; color:#183125; font-weight:500;">P-01</td>
              <td style="padding:12px 16px; font-size:14px; color:#1A1A1A;">Proveedor A</td>
              <td style="padding:12px 16px; font-size:14px; color:#1A1A1A; text-align:right;">$1,500.00</td>
            </tr>
            <tr>
              <td style="padding:12px 16px; font-size:14px; color:#183125; font-weight:500;">P-02</td>
              <td style="padding:12px 16px; font-size:14px; color:#1A1A1A;">Proveedor B</td>
              <td style="padding:12px 16px; font-size:14px; color:#1A1A1A; text-align:right;">$3,200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    section_props: `
      <tr><td><code>data</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Arreglo de objetos</td></tr>
      <tr><td><code>columns</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Definición de columnas</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafDataGrid</span> <span class="at">columns</span>={columns} <span class="at">data</span>={data} /&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Debe construirse usando React Table (TanStack Table) para manejar la lgica, y este componente solo es la capa visual.</div></div>`,
    do_body: `<div>Usar SiafDataGrid para todos los catlogos.</div>`,
    do_desc: `Centraliza la lgica.`,
    dont_body: `<div>Tablas HTML crudas en cada pgina.</div>`,
    dont_desc: `No duplicar cdigo de rendering de tablas.`,
    section_deprecated: `<div class="deprecated-row"><div>Uso de tables HTML nativas en vistas.</div></div>`
  },
  {
    filename: 'dg02-grid-acciones.html',
    id: 'DG-02',
    title: 'DataGrid Acciones',
    desc: 'Columna de acciones por fila.',
    tag: 'Data Grid',
    tsx: 'Columna Acciones',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Columna estandarizada (usualmente la ltima) que contiene iconos (B-05 Button Icon) para editar, eliminar o ver el detalle del registro.</p>',
    section_preview: `
      <div style="padding:8px 16px; display:flex; gap:8px; align-items:center;">
        <button class="siaf-btn siaf-btn-ghost siaf-btn-sm" title="Ver detalle">O</button>
        <button class="siaf-btn siaf-btn-ghost siaf-btn-sm" title="Editar">✏</button>
        <button class="siaf-btn siaf-btn-danger siaf-btn-sm" title="Eliminar">🗑</button>
      </div>
    `,
    section_props: `
      <tr><td>N/A</td><td>-</td><td>-</td><td>Se define en la configuracin de columnas.</td></tr>
    `,
    section_code: `const columns = [\n  {\n    id: 'acciones',\n    cell: ({row}) => &lt;<span class="tp">ActionCell</span> <span class="at">row</span>={row} /&gt;\n  }\n]`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Usar tooltips obligatorios.</div></div>`,
    do_body: `<div>Iconos sutiles con tooltip.</div>`,
    do_desc: `Usar la variante ghost o icon-only para que no pesen visualmente.`,
    dont_body: `<div>Botones grandes con texto "Editar" en cada fila.</div>`,
    dont_desc: `Llena la tabla de ruido visual innecesario.`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'dg03-columna-sort.html',
    id: 'DG-03',
    title: 'Columna Ordenable',
    desc: 'Cabeceras interactivas para ordenar.',
    tag: 'Data Grid',
    tsx: 'Grid Header',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Indica visualmente qu columnas permiten ordenar los datos y en qu direccin estn ordenados.</p>',
    section_preview: `
      <div style="display:flex; gap:24px; padding:16px; background:#f5f0e8; border:1px solid #D4C9B5;">
        <div style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:12px; font-weight:600; color:#183125;">
          Nombre <span style="font-size:10px;">↑</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:12px; font-weight:600; color:#5a5a5a;">
          Fecha <span style="font-size:10px; color:#ccc;">↕</span>
        </div>
      </div>
    `,
    section_props: `
      <tr><td>N/A</td><td>-</td><td>-</td><td>Habilitado va configuracin de TanStack Table.</td></tr>
    `,
    section_code: `const columns = [\n  {\n    header: 'Nombre',\n    accessorKey: 'nombre',\n    enableSorting: true\n  }\n]`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>El cono de sort debe ser visible en hover o cuando est activo.</div></div>`,
    do_body: `<div>Indicador de orden activo.</div>`,
    do_desc: `El usuario siempre debe saber cmo est la data.`,
    dont_body: `<div>Header normal sin indicador.</div>`,
    dont_desc: `Causa confusin si la data cambia de orden sola.`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'dg04-col-toggle.html',
    id: 'DG-04',
    title: 'Column Toggle',
    desc: 'Selector de columnas visibles.',
    tag: 'Data Grid',
    tsx: 'ColumnVisibility.tsx',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Permite al usuario elegir qu columnas ver en tablas que tienen demasiada informacin para el ancho de pantalla.</p>',
    section_preview: `
      <div style="padding:16px; background:#fff; border:1px solid #D4C9B5; border-radius:4px; max-width:200px;">
        <div style="font-size:12px; font-weight:600; margin-bottom:8px;">Columnas</div>
        <label style="display:flex; gap:8px; font-size:14px; margin-bottom:4px;"><input type="checkbox" checked> ID</label>
        <label style="display:flex; gap:8px; font-size:14px; margin-bottom:4px;"><input type="checkbox" checked> Nombre</label>
        <label style="display:flex; gap:8px; font-size:14px;"><input type="checkbox"> Fecha Registro</label>
      </div>
    `,
    section_props: `
      <tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>
    `,
    section_code: `// Utilizando la API de visibility de TanStack Table`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Normalmente va en el Toolbar (LC-07).</div></div>`,
    do_body: `<div>Ocultar columnas no crticas por defecto en pantallas pequeas.</div>`,
    do_desc: `Mantiene la tabla legible.`,
    dont_body: `<div>Scroll horizontal de 20 columnas sin poder ocultarlas.</div>`,
    dont_desc: `Mala experiencia en laptops.`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'dg05-totales.html',
    id: 'DG-05',
    title: 'Fila de Totales',
    desc: 'Footer de tabla con sumatorias.',
    tag: 'Data Grid',
    tsx: 'SiafDataGrid.tsx (footer)',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>ltima fila fijada abajo (o despus de los datos) que resume montos. Clave en el mdulo de Plizas (Cuadre de sumas).</p>',
    section_preview: `
      <table style="width:100%; border-collapse:collapse; text-align:left;">
        <tfoot style="background:#e8e3da; font-weight:700;">
          <tr>
            <td style="padding:12px 16px; font-size:14px;">Total</td>
            <td style="padding:12px 16px; font-size:14px; text-align:right; color:#183125;">$4,700.00</td>
          </tr>
        </tfoot>
      </table>
    `,
    section_props: `
      <tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>
    `,
    section_code: `// Uso de footer de columnas en la tabla`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Fondo ms oscuro que las filas para que resalte.</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'dg06-paginacion.html',
    id: 'DG-06',
    title: 'Paginacin',
    desc: 'Controles de navegacin de pginas.',
    tag: 'Data Grid',
    tsx: 'SiafPagination.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Controles para moverse entre pginas de datos y elegir el tamao de pgina.</p>',
    section_preview: `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 16px; border-top:1px solid #D4C9B5; background:#fff;">
        <div style="font-size:12px; color:#5a5a5a;">Mostrando 1-10 de 50</div>
        <div style="display:flex; gap:4px;">
          <button class="siaf-btn siaf-btn-ghost siaf-btn-sm" disabled>&lt;</button>
          <button class="siaf-btn siaf-btn-primary siaf-btn-sm">1</button>
          <button class="siaf-btn siaf-btn-ghost siaf-btn-sm">2</button>
          <button class="siaf-btn siaf-btn-ghost siaf-btn-sm">3</button>
          <button class="siaf-btn siaf-btn-ghost siaf-btn-sm">&gt;</button>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>pageCount</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Nmero total de pginas</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafPagination</span> <span class="at">page</span>={1} <span class="at">total</span>={50} /&gt;`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Integrado por default en el SiafDataGrid.</div></div>`,
    do_body: `<div>Mostrar informacin de total.</div>`,
    do_desc: `Da contexto de la cantidad de data.`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'dg07-empty.html',
    id: 'DG-07',
    title: 'DataGrid Vaco',
    desc: 'Estado de tabla sin resultados.',
    tag: 'Data Grid',
    tsx: 'SiafDataGrid.tsx (empty)',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Se reutiliza el componente FB-08 Empty State dentro del cuerpo de la tabla para mantener el layout (headers visibles pero body vaco).</p>',
    section_preview: `
      <div style="border:1px solid #D4C9B5; border-radius:6px; overflow:hidden;">
        <table style="width:100%; border-collapse:collapse; text-align:left;">
          <thead style="background:#f5f0e8; border-bottom:1px solid #D4C9B5;">
            <tr><th style="padding:12px; font-size:12px;">Columnas...</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:32px; text-align:center; color:#5a5a5a;">No hay registros para mostrar.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    section_props: `
      <tr><td>N/A</td><td>-</td><td>-</td><td>-</td></tr>
    `,
    section_code: `// Renderizado automtico si data.length === 0`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>-</div></div>`,
    do_body: `<div>-</div>`,
    do_desc: `-`,
    dont_body: `<div>-</div>`,
    dont_desc: `-`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'dg08-skeleton.html',
    id: 'DG-08',
    title: 'DataGrid Skeleton',
    desc: 'Estado de carga de la tabla.',
    tag: 'Data Grid',
    tsx: 'SiafDataGrid.tsx (loading)',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Filas con animacin shimmer mientras se realiza la consulta inicial a la base de datos.</p>',
    section_preview: `
      <div style="border:1px solid #D4C9B5; border-radius:6px; overflow:hidden;">
        <table style="width:100%; border-collapse:collapse; text-align:left;">
          <tbody>
            <tr><td style="padding:16px;"><div style="background:#e8e3da; height:16px; border-radius:4px; width:100%;"></div></td></tr>
            <tr><td style="padding:16px;"><div style="background:#e8e3da; height:16px; border-radius:4px; width:80%;"></div></td></tr>
            <tr><td style="padding:16px;"><div style="background:#e8e3da; height:16px; border-radius:4px; width:90%;"></div></td></tr>
          </tbody>
        </table>
      </div>
    `,
    section_props: `
      <tr><td><code>loading</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Muestra los skeletons</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafDataGrid</span> <span class="at">loading</span>={isLoading} /&gt;`,
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
console.log('Done datagrids.');
