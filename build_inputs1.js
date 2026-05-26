const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'b07-input-text.html',
    id: 'B-07',
    title: 'Input Text',
    desc: 'Campo de texto estándar para captura de datos cortos.',
    tag: 'Base Elements',
    tsx: 'SiafInput.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>El componente principal para la captura de texto de una sola línea. Incluye soporte para etiquetas (labels), mensajes de error y texto de ayuda (hints).</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px; max-width:400px;">
        <!-- Normal -->
        <div class="siaf-input-group">
          <label class="siaf-label">Nombre del proveedor</label>
          <input type="text" class="siaf-input" placeholder="Ej: Dix Consultoría S.A. de C.V.">
        </div>
        <!-- Required + Hint -->
        <div class="siaf-input-group">
          <label class="siaf-label siaf-label-req">RFC</label>
          <input type="text" class="siaf-input" placeholder="Ej: ABC010203XY9">
          <span class="siaf-hint">13 caracteres alfanuméricos sin espacios.</span>
        </div>
        <!-- Error -->
        <div class="siaf-input-group">
          <label class="siaf-label siaf-label-req">Correo electrónico</label>
          <input type="text" class="siaf-input error" value="usuario@">
          <span class="siaf-error-msg">Formato de correo inválido</span>
        </div>
        <!-- Disabled -->
        <div class="siaf-input-group">
          <label class="siaf-label">Clave de sistema</label>
          <input type="text" class="siaf-input" value="SYS-2026-99" disabled>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>label</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Texto descriptivo del campo</td></tr>
      <tr><td><code>error</code></td><td><span class="badge-opt">Opcional</span></td><td><code>undefined</code></td><td>Mensaje de error (activa borde rojo)</td></tr>
      <tr><td><code>hint</code></td><td><span class="badge-opt">Opcional</span></td><td><code>undefined</code></td><td>Texto de ayuda bajo el input</td></tr>
      <tr><td><code>required</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Muestra asterisco rojo en el label</td></tr>
    `,
    section_code: `<span class="kw">import</span> <span class="tp">React</span> <span class="kw">from</span> <span class="str">'react'</span>

<span class="kw">export interface</span> <span class="tp">SiafInputProps</span> <span class="kw">extends</span> <span class="tp">React</span>.<span class="tp">InputHTMLAttributes</span>&lt;<span class="tp">HTMLInputElement</span>&gt; {
  <span class="at">label</span>: <span class="tp">string</span>;
  <span class="at">error</span>?: <span class="tp">string</span>;
  <span class="at">hint</span>?: <span class="tp">string</span>;
}

<span class="kw">export const</span> <span class="fn">SiafInput</span> = <span class="tp">React</span>.<span class="fn">forwardRef</span>&lt;<span class="tp">HTMLInputElement</span>, <span class="tp">SiafInputProps</span>&gt;(
  ({ <span class="at">label</span>, <span class="at">error</span>, <span class="at">hint</span>, <span class="at">required</span>, <span class="at">className</span>, ...<span class="at">props</span> }, <span class="at">ref</span>) =&gt; {
    <span class="kw">return</span> (
      &lt;<span class="tp">div</span> <span class="at">className</span>=<span class="str">"siaf-input-group"</span>&gt;
        &lt;<span class="tp">label</span> <span class="at">className</span>={<span class="str">\`siaf-label \${required ? 'siaf-label-req' : ''}\`</span>}&gt;{label}&lt;/<span class="tp">label</span>&gt;
        &lt;<span class="tp">input</span>
          <span class="at">ref</span>={ref}
          <span class="at">className</span>={<span class="str">\`siaf-input \${error ? 'error' : ''} \${className || ''}\`</span>}
          {...props}
        /&gt;
        {error && &lt;<span class="tp">span</span> <span class="at">className</span>=<span class="str">"siaf-error-msg"</span>&gt;{error}&lt;/<span class="tp">span</span>&gt;}
        {hint && !error && &lt;<span class="tp">span</span> <span class="at">className</span>=<span class="str">"siaf-hint"</span>&gt;{hint}&lt;/<span class="tp">span</span>&gt;}
      &lt;/<span class="tp">div</span>&gt;
    );
  }
);
<span class="nm">SiafInput</span>.<span class="at">displayName</span> = <span class="str">'SiafInput'</span>;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          El componente debe usar <code>React.forwardRef</code> para que sea 100% compatible con <code>react-hook-form</code> (la función <code>register</code> necesita pasar ref).
        </div>
      </div>
    `,
    do_body: `<div class="siaf-input-group"><label class="siaf-label siaf-label-req">RFC</label><input type="text" class="siaf-input" value="ABC010203XY9"></div>`,
    do_desc: `Usar siempre un label visible y descriptivo.`,
    dont_body: `<input type="text" class="siaf-input" placeholder="RFC">`,
    dont_desc: `No usar solo el placeholder como etiqueta (es mala práctica de accesibilidad).`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Múltiples pantallas en <code>configuracion/</code> usan <code>&lt;input style={{...}} className='form-control'&gt;</code>.</div>
      </div>
    `
  },
  {
    filename: 'b08-input-date.html',
    id: 'B-08',
    title: 'Input Date',
    desc: 'Variante de SiafInput para fechas.',
    tag: 'Base Elements',
    tsx: 'SiafInput.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Utiliza el input de tipo fecha nativo del navegador pero mantiene el estilo consistente del sistema. Para la mayoría de los casos, la experiencia nativa de <code>type="date"</code> es suficiente y accesible.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px; max-width:400px;">
        <div class="siaf-input-group">
          <label class="siaf-label">Fecha de inicio</label>
          <input type="date" class="siaf-input">
          <span class="siaf-hint">Formato: DD/MM/AAAA</span>
        </div>
        <div class="siaf-input-group">
          <label class="siaf-label">Fecha de cierre</label>
          <input type="date" class="siaf-input" disabled value="2026-12-31">
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>type</code></td><td><span class="badge-req">Requerido</span></td><td><code>'text'</code></td><td>Pasar <code>'date'</code> a SiafInput</td></tr>
      <tr><td><code>min</code> / <code>max</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>String formato YYYY-MM-DD para restringir</td></tr>
    `,
    section_code: `<span class="cm">// Se utiliza el mismo componente SiafInput</span>\n&lt;<span class="tp">SiafInput</span>\n  <span class="at">type</span>=<span class="str">"date"</span>\n  <span class="at">label</span>=<span class="str">"Fecha de inicio"</span>\n  <span class="at">hint</span>=<span class="str">"Formato: DD/MM/AAAA"</span>\n  <span class="at">min</span>=<span class="str">"2026-01-01"</span>\n/&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Siempre agregar el hint de formato (DD/MM/AAAA) porque algunos navegadores muestran formatos diferentes dependiendo del idioma del SO.</div>
      </div>
    `,
    do_body: `<div class="siaf-input-group"><label class="siaf-label">Fecha</label><input type="date" class="siaf-input"><span class="siaf-hint">Formato: DD/MM/AAAA</span></div>`,
    do_desc: `Incluir restricciones de fechas (min/max) cuando aplique (ej: dentro del ejercicio fiscal).`,
    dont_body: `<div class="siaf-input-group"><label class="siaf-label">Fecha</label><input type="text" class="siaf-input" placeholder="DD/MM/AAAA"></div>`,
    dont_desc: `No usar type="text" esperando que el usuario escriba las barras (/).`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Falta de unificación en los datepickers, algunos usan inputs de texto, otros librerías externas.</div>
      </div>
    `
  },
  {
    filename: 'b09-input-number.html',
    id: 'B-09',
    title: 'Input Number (Moneda)',
    desc: 'Input especializado para importes financieros.',
    tag: 'Base Elements',
    tsx: 'SiafInputNumber.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Campo diseñado para la captura de dinero (importes, precios). Muestra un prefijo de moneda y alinea el texto a la derecha. Debe almacenar el valor como <code>number</code> pero mostrarlo formateado con comas (solo lectura) o al salir del foco.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px; max-width:400px;">
        <div class="siaf-input-group">
          <label class="siaf-label siaf-label-req">Importe</label>
          <div style="position:relative;">
            <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:#5A5A5A;">$</span>
            <input type="text" class="siaf-input" value="1,234,567.89" style="padding-left:24px; text-align:right; font-family:monospace; font-size:14px;">
          </div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>prefix</code></td><td><span class="badge-opt">Opcional</span></td><td><code>'$'</code></td><td>Símbolo de moneda</td></tr>
      <tr><td><code>formatCurrency</code></td><td><span class="badge-opt">Opcional</span></td><td><code>true</code></td><td>Aplica Intl.NumberFormat(es-MX) al mostrar</td></tr>
    `,
    section_code: `<span class="cm">// Un componente envoltorio sobre el input normal</span>\n&lt;<span class="tp">SiafInputNumber</span>\n  <span class="at">label</span>=<span class="str">"Importe total"</span>\n  <span class="at">prefix</span>=<span class="str">"$"</span>\n  <span class="at">formatCurrency</span>={true}\n/&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Para la captura de dinero en React, lo mejor es usar un input de texto y manejar el formateo onBlur, o usar una librería ligera como <code>react-number-format</code> dentro de este componente. El valor enviado al form debe ser numérico.</div>
      </div>
    `,
    do_body: `<div style="position:relative;"><span style="position:absolute; left:12px; top:9px;">$</span><input type="text" class="siaf-input" value="100.50" style="padding-left:24px;text-align:right;"></div>`,
    do_desc: `Mantener el prefijo separado del valor del input.`,
    dont_body: `<input type="text" class="siaf-input" value="$ 100.50">`,
    dont_desc: `No mezclar el símbolo en el string del valor, rompe validaciones numéricas.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Uso de type="number" nativo que no soporta separadores de miles y causa mala experiencia de usuario.</div>
      </div>
    `
  },
  {
    filename: 'b10-select.html',
    id: 'B-10',
    title: 'Select',
    desc: 'Menú desplegable nativo.',
    tag: 'Base Elements',
    tsx: 'SiafSelect.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Componente select basado en HTML nativo con estilos consistentes. Ideal para listas cortas (menos de 20 opciones).</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px; max-width:400px;">
        <div class="siaf-input-group">
          <label class="siaf-label">Tipo de póliza</label>
          <select class="siaf-select">
            <option value="">Selecciona...</option>
            <option value="ingreso">Póliza de Ingreso</option>
            <option value="egreso">Póliza de Egreso</option>
            <option value="diario">Póliza de Diario</option>
          </select>
        </div>
        <div class="siaf-input-group">
          <label class="siaf-label">Estatus</label>
          <select class="siaf-select error">
            <option value="">Selecciona...</option>
          </select>
          <span class="siaf-error-msg">Debe seleccionar un estatus</span>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>options</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>{ value: string, label: string }[]</code></td></tr>
      <tr><td><code>placeholder</code></td><td><span class="badge-opt">Opcional</span></td><td><code>'Selecciona...'</code></td><td>Opción vacía inicial</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafSelect</span>\n  <span class="at">label</span>=<span class="str">"Tipo"</span>\n  <span class="at">options</span>={[\n    { value: <span class="str">'ingreso'</span>, label: <span class="str">'Ingreso'</span> },\n    { value: <span class="str">'egreso'</span>, label: <span class="str">'Egreso'</span> }\n  ]}\n  <span class="at">placeholder</span>=<span class="str">"Selecciona tipo..."</span>\n/&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>Asegurarse de que SIEMPRE exista una opción con value vacío para el estado inicial.</div>
      </div>
    `,
    do_body: `<select class="siaf-select"><option value="">Seleccione...</option></select>`,
    do_desc: `Incluir la opción vacía para forzar decisión explícita.`,
    dont_body: `<select class="siaf-select"><option value="ingreso">Ingreso</option></select>`,
    dont_desc: `No dejar un valor preseleccionado sin opción vacía a menos que sea un default seguro.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Selects con <code>style={{...}}</code> y mapeo manual de opciones en el JSX.</div>
      </div>
    `
  },
  {
    filename: 'b11-textarea.html',
    id: 'B-11',
    title: 'Textarea',
    desc: 'Área de texto multilínea.',
    tag: 'Base Elements',
    tsx: 'SiafTextarea.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Para observaciones, conceptos largos o justificaciones. Soporta contador de caracteres para límites del esquema de BD.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px; max-width:400px;">
        <div class="siaf-input-group">
          <div style="display:flex; justify-content:space-between; align-items:flex-end;">
            <label class="siaf-label siaf-label-req">Concepto del movimiento</label>
            <span style="font-size:11px; color:#5A5A5A;">245 / 500</span>
          </div>
          <textarea class="siaf-textarea" rows="4">Pago por servicios de consultoría informática correspondiente al mes de mayo de 2026.</textarea>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>maxLength</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>Límite máximo de caracteres</td></tr>
      <tr><td><code>showCount</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Muestra contador en la parte superior derecha</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafTextarea</span>\n  <span class="at">label</span>=<span class="str">"Concepto"</span>\n  <span class="at">rows</span>={4}\n  <span class="at">maxLength</span>={500}\n  <span class="at">showCount</span>\n  <span class="at">required</span>\n/&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>El contador de caracteres se logra comparando el valor del estado interno o midiendo length del campo si está no-controlado.</div>
      </div>
    `,
    do_body: `<textarea class="siaf-textarea" rows="3"></textarea>`,
    do_desc: `Ajustar 'rows' según la cantidad esperada de texto.`,
    dont_body: `<input type="text" class="siaf-input">`,
    dont_desc: `No usar inputs text para 'Observaciones', la experiencia de edición es pobre.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Uso de textarea nativo sin contador de caracteres donde la BD restringe a 500.</div>
      </div>
    `
  },
  {
    filename: 'b12-checkbox.html',
    id: 'B-12',
    title: 'Checkbox',
    desc: 'Casilla de selección múltiple o boolean.',
    tag: 'Base Elements',
    tsx: 'SiafCheckbox.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Utilizado para encender/apagar configuraciones y seleccionar registros en el grid. Puede tener estado parcial (indeterminate).</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px;">
        <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
          <input type="checkbox" style="width:16px;height:16px;accent-color:var(--pjev-verde-oscuro);">
          <span style="font-size:14px;">Inactivo</span>
        </label>
        <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
          <input type="checkbox" checked style="width:16px;height:16px;accent-color:var(--pjev-verde-oscuro);">
          <span style="font-size:14px; color:#183125; font-weight:500;">Activo</span>
        </label>
        <label style="display:flex; align-items:center; gap:8px; cursor:not-allowed; opacity:0.6;">
          <input type="checkbox" disabled style="width:16px;height:16px;">
          <span style="font-size:14px;">Solo lectura</span>
        </label>
      </div>
    `,
    section_props: `
      <tr><td><code>label</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>Texto clickable junto a la casilla</td></tr>
      <tr><td><code>indeterminate</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Estado semi-seleccionado (para el grid)</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafCheckbox</span>\n  <span class="at">label</span>=<span class="str">"Mantener sesión iniciada"</span>\n  <span class="at">checked</span>={isActive}\n  <span class="at">onChange</span>={(e) =&gt; setIsActive(e.target.checked)}\n/&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>El estado indeterminate en React solo se puede asignar mediante una referencia al elemento del DOM (<code>ref.current.indeterminate = true</code>) dentro de un <code>useEffect</code>.</div>
      </div>
    `,
    do_body: `<label style="display:flex; gap:8px;"><input type="checkbox"><span>Opción</span></label>`,
    do_desc: `Envolver el input en el label para que el texto sea clickeable.`,
    dont_body: `<input type="checkbox"> <span>Opción</span>`,
    dont_desc: `No colocar el texto suelto, dificulta el clic en pantallas táctiles o mouses.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Checkboxes sueltos en el grid sin label asociado.</div>
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
console.log('Done inputs 1.');
