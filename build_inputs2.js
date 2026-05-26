const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'b13-badge-estatus.html',
    id: 'B-13',
    title: 'Badge Estatus',
    desc: 'Indicador visual del estado de un registro.',
    tag: 'Base Elements',
    tsx: 'SiafBadge.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Los badges de estatus utilizan colores semánticos para comunicar rápidamente el estado de un registro. Los estatus están estandarizados en todo el sistema.</p>',
    section_preview: `
      <div style="display:flex; flex-wrap:wrap; gap:16px;">
        <span class="siaf-badge siaf-badge-registrado">Registrado</span>
        <span class="siaf-badge siaf-badge-enviado">Enviado</span>
        <span class="siaf-badge siaf-badge-autorizado">Autorizado</span>
        <span class="siaf-badge siaf-badge-afectado">Afectado</span>
        <span class="siaf-badge siaf-badge-cancelado">Cancelado</span>
      </div>
    `,
    section_props: `
      <tr><td><code>estatus</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'registrado' | 'enviado' | 'autorizado' | 'afectado' | 'cancelado'</code></td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafBadge</span> <span class="at">estatus</span>=<span class="str">"autorizado"</span>&gt;Autorizado&lt;/<span class="tp">SiafBadge</span>&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Los 5 valores de estatus son los nicos que existen en el sistema base. No crear variantes nuevas por mdulo sin aprobacin de arquitectura. El valor del backend se pasa directo a la prop.</div>
      </div>
    `,
    do_body: `<span class="siaf-badge siaf-badge-afectado">Afectado</span>`,
    do_desc: `Usar el componente que maneja los colores automticamente.`,
    dont_body: `<span style="background: green; color: white; border-radius: 10px; padding: 2px 8px;">Afectado</span>`,
    dont_desc: `No usar colores hardcodeados inline ni estilos manuales para badges.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Vistas que utilizan un objeto <code>ESTATUS_BADGE</code> con mapeo de colores hexadecimales (ej. polizas/page.tsx).</div>
      </div>
    `
  },
  {
    filename: 'b14-badge-tipo.html',
    id: 'B-14',
    title: 'Badge Tipo',
    desc: 'Indicador de categorizacin del documento.',
    tag: 'Base Elements',
    tsx: 'SiafBadge.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Utilizado para identificar el tipo de documento o movimiento. A diferencia de los estatus, los tipos varan por mdulo.</p>',
    section_preview: `
      <div style="display:flex; flex-wrap:wrap; gap:16px;">
        <span class="siaf-badge" style="background:#e8f5e9; color:#2e7d32;">Ingreso</span>
        <span class="siaf-badge" style="background:#fdeaec; color:#5e111a;">Egreso</span>
        <span class="siaf-badge" style="background:#eff6ff; color:#1d4ed8;">Diario</span>
        <span class="siaf-badge" style="background:#fdf6e3; color:#856404;">Cierre</span>
        <span class="siaf-badge" style="background:#f5f5f5; color:#424242;">Traspaso</span>
      </div>
    `,
    section_props: `
      <tr><td><code>tipo</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Identificador del tipo (ej: <code>'ingreso'</code>)</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafBadge</span> <span class="at">tipo</span>=<span class="str">"ingreso"</span>&gt;Ingreso&lt;/<span class="tp">SiafBadge</span>&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>El componente debe definir un mapa de colores por tipo (Ingreso, Egreso, Diario, Cierre, Traspaso). Daryl debe coordinar con Cristian para recolectar todos los tipos existentes en el sistema y definirlos aqu.</div>
      </div>
    `,
    do_body: `<span class="siaf-badge" style="background:#eff6ff; color:#1d4ed8;">Diario</span>`,
    do_desc: `Usar la prop tipo para que el color se asigne automticamente desde la librera.`,
    dont_body: `<span>Diario</span>`,
    dont_desc: `No dejar los tipos sin diferenciacin visual en las tablas de datos.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Vistas que recrean los estilos CSS de badge por cada tipo de documento.</div>
      </div>
    `
  },
  {
    filename: 'b15-chip.html',
    id: 'B-15',
    title: 'Chip',
    desc: 'Etiqueta compacta de identificacin.',
    tag: 'Base Elements',
    tsx: 'SiafChip.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Elemento altamente compacto para mostrar acrnimos. Esencial en el mdulo de Plizas para los tipos PD, PE, PI, PP, PCh.</p>',
    section_preview: `
      <div style="display:flex; gap:16px;">
        <span class="siaf-badge" style="border-radius:12px; padding:2px 8px; font-weight:700; background:#e3f2fd; color:#1565c0;">PD</span>
        <span class="siaf-badge" style="border-radius:12px; padding:2px 8px; font-weight:700; background:#ffebee; color:#c62828;">PE</span>
        <span class="siaf-badge" style="border-radius:12px; padding:2px 8px; font-weight:700; background:#e8f5e9; color:#2e7d32;">PI</span>
        <span class="siaf-badge" style="border-radius:12px; padding:2px 8px; font-weight:700; background:#f3e5f5; color:#6a1b9a;">PP</span>
        <span class="siaf-badge" style="border-radius:12px; padding:2px 8px; font-weight:700; background:#fff3e0; color:#ef6c00;">PCh</span>
      </div>
    `,
    section_props: `
      <tr><td><code>tipo</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Determina el acrnimo y el color.</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafChip</span> <span class="at">tipo</span>=<span class="str">"PD"</span> /&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Este componente asocia el acrnimo directamente con su color histrico del PJEV. No se le debe pasar texto manualmente (children), recibe el tipo y l decide qu renderizar.</div>
      </div>
    `,
    do_body: `<span class="siaf-badge" style="border-radius:12px; padding:2px 8px; font-weight:700; background:#e3f2fd; color:#1565c0;">PD</span>`,
    do_desc: `Usar la prop tipo y dejar que el chip pinte el acrnimo correcto.`,
    dont_body: `<span class="siaf-badge" style="border-radius:12px; padding:2px 8px; font-weight:700; background:#183125; color:#fff;">Pliza Diario</span>`,
    dont_desc: `El chip no es para textos largos, para eso usar Badge.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>polizas/page.tsx define TIPO_CHIP con colores hardcodeados inline.</div>
      </div>
    `
  },
  {
    filename: 'b16-label.html',
    id: 'B-16',
    title: 'Label de lectura',
    desc: 'Etiqueta para vistas de detalle.',
    tag: 'Base Elements',
    tsx: 'SiafLabel.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Se utiliza en vistas de slo lectura (detalles de documentos) para mostrar el nombre del campo, manteniendo la coherencia tipogrfica con los formularios.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px;">
        <div>
          <label class="siaf-label">RFC:</label>
          <div style="font-size:14px;">ABC010203XY9</div>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <label class="siaf-label" style="margin:0;">Estatus:</label>
          <span class="siaf-badge siaf-badge-registrado">Registrado</span>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>children</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Texto del label</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafLabel</span>&gt;Monto Total:&lt;/<span class="tp">SiafLabel</span>&gt;\n&lt;<span class="tp">span</span>&gt;$10,000.00&lt;/<span class="tp">span</span>&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Exportar la clase <code>.siaf-label</code> de shared.css como un pequeo componente o utilizarla directamente en el layout para asegurar que la tipografa (12px, semi-bold, var(--pjev-texto)) se aplique.</div>
      </div>
    `,
    do_body: `<div><label class="siaf-label">Clave:</label> <span>102</span></div>`,
    do_desc: `Usar el label estandarizado para mantener las fichas tcnicas ordenadas.`,
    dont_body: `<div><b>Clave:</b> 102</div>`,
    dont_desc: `No usar etiquetas de negrita bsicas o estilos sueltos.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Vistas que usan <code>&lt;p style={{fontWeight:'bold'}}&gt;</code> para etiquetar datos.</div>
      </div>
    `
  },
  {
    filename: 'b17-divider.html',
    id: 'B-17',
    title: 'Divider',
    desc: 'Lnea separadora de secciones.',
    tag: 'Base Elements',
    tsx: 'SiafDivider.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Elemento visual para organizar contenido dentro de Cards o agrupar acciones en barras de herramientas.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:24px; padding:16px;">
        <div style="font-size:14px;">Seccin superior</div>
        <hr style="border:none; border-top:1px solid #D4C9B5; margin:0;">
        <div style="font-size:14px;">Seccin inferior</div>
        
        <div style="position:relative; text-align:center;">
          <hr style="border:none; border-top:1px solid #D4C9B5; margin:0; position:absolute; top:50%; width:100%; z-index:1;">
          <span style="position:relative; background:#f5f0e8; padding:0 8px; font-size:12px; color:#5a5a5a; z-index:2;">Datos Bancarios</span>
        </div>
        
        <div style="display:flex; gap:8px; align-items:center; background:#fff; padding:8px; border:1px solid #D4C9B5;">
          <button class="siaf-btn siaf-btn-ghost siaf-btn-sm">Filtro 1</button>
          <div style="width:1px; height:24px; background:#D4C9B5;"></div>
          <button class="siaf-btn siaf-btn-ghost siaf-btn-sm">Accin 2</button>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>orientation</code></td><td><span class="badge-opt">Opcional</span></td><td><code>'horizontal'</code></td><td><code>'horizontal' | 'vertical'</code></td></tr>
      <tr><td><code>label</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>Texto centrado sobre la lnea</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafDivider</span> <span class="at">label</span>=<span class="str">"Detalle del movimiento"</span> /&gt;\n\n<span class="cm">// Vertical en toolbar</span>\n&lt;<span class="tp">SiafDivider</span> <span class="at">orientation</span>=<span class="str">"vertical"</span> /&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Asegurarse de usar <code>var(--pjev-borde)</code> como el color del divider. Si lleva label, el fondo del texto debe coincidir con el fondo contenedor (blanco en cards, crema en pgina) para tapar la lnea.</div>
      </div>
    `,
    do_body: `<div style="position:relative; text-align:center;"><hr style="border:none; border-top:1px solid #D4C9B5; margin:0; position:absolute; top:50%; width:100%;"><span style="position:relative; background:#fff; padding:0 8px; font-size:11px;">O</span></div>`,
    do_desc: `Usarlo para dividir agrupaciones lgicas grandes dentro de un formulario.`,
    dont_body: `<div style="margin-top:40px;"></div>`,
    dont_desc: `No usar mrgenes excesivos para simular divisin visual, es menos claro.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Uso de <code>&lt;hr/&gt;</code> sin estilizacin que toma el color gris por defecto del navegador.</div>
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
  
  content = content.replace(/<title>.*?<\/title>/g, `<title>${page.id} · ${page.title} — UI_PJEV</title>`);

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
console.log('Done inputs 2.');
