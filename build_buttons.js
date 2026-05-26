const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'b01-button-primary.html',
    id: 'B-01',
    title: 'Button — Primary',
    desc: 'Documentación del elemento B-01.',
    tag: 'Base Elements',
    tsx: 'SiafButton.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>El botón principal del sistema. Se utiliza para la acción principal y más importante de una pantalla, como "Guardar", "Registrar" o "Confirmar".</p><div class="callout warning"><span class="callout-icon">⚠</span><div><strong>Regla de oro:</strong> Nunca debe haber más de un botón primario visible a la vez en una misma vista o modal.</div></div>',
    section_preview: `
      <button class="siaf-btn siaf-btn-primary siaf-btn-sm">Guardar (sm)</button>
      <button class="siaf-btn siaf-btn-primary">Guardar (md)</button>
      <button class="siaf-btn siaf-btn-primary siaf-btn-lg">Guardar (lg)</button>
      <div style="width:100%;height:10px;"></div>
      <button class="siaf-btn siaf-btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Nuevo Registro</button>
      <button class="siaf-btn siaf-btn-primary" disabled>Deshabilitado</button>
      <button class="siaf-btn siaf-btn-primary siaf-btn-loading"><div class="siaf-spinner"></div> Procesando...</button>
    `,
    section_props: `
      <tr><td><code>variant</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Variante visual del botón (<code>'primary' | 'secondary' | 'danger' | 'ghost'</code>)</td></tr>
      <tr><td><code>size</code></td><td><span class="badge-opt">Opcional</span></td><td><code>'md'</code></td><td>Tamaño del botón (<code>'sm' | 'md' | 'lg'</code>)</td></tr>
      <tr><td><code>loading</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Muestra spinner y deshabilita el botón</td></tr>
      <tr><td><code>disabled</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Estado deshabilitado nativo</td></tr>
      <tr><td><code>icon</code></td><td><span class="badge-opt">Opcional</span></td><td><code>undefined</code></td><td>Ícono de Lucide React a renderizar</td></tr>
    `,
    section_code: `<span class="kw">import</span> <span class="tp">React</span> <span class="kw">from</span> <span class="str">'react'</span>
<span class="kw">import</span> { <span class="nm">clsx</span>, <span class="tp">type</span> <span class="tp">ClassValue</span> } <span class="kw">from</span> <span class="str">'clsx'</span>

<span class="kw">interface</span> <span class="tp">SiafButtonProps</span> <span class="kw">extends</span> <span class="tp">React</span>.<span class="tp">ButtonHTMLAttributes</span>&lt;<span class="tp">HTMLButtonElement</span>&gt; {
  <span class="at">variant</span>: <span class="str">'primary'</span> | <span class="str">'secondary'</span> | <span class="str">'danger'</span> | <span class="str">'ghost'</span>;
  <span class="at">size</span>?: <span class="str">'sm'</span> | <span class="str">'md'</span> | <span class="str">'lg'</span>;
  <span class="at">loading</span>?: <span class="tp">boolean</span>;
  <span class="at">icon</span>?: <span class="tp">React</span>.<span class="tp">ReactNode</span>;
  <span class="at">iconOnly</span>?: <span class="tp">boolean</span>;
}

<span class="kw">export</span> <span class="kw">function</span> <span class="fn">SiafButton</span>({ 
  <span class="at">variant</span>, <span class="at">size</span> = <span class="str">'md'</span>, <span class="at">loading</span>, <span class="at">icon</span>, <span class="at">iconOnly</span>, 
  <span class="at">className</span>, <span class="at">children</span>, <span class="at">disabled</span>, ...<span class="at">props</span> 
}: <span class="tp">SiafButtonProps</span>) {
  <span class="kw">const</span> <span class="nm">baseClass</span> = <span class="str">'siaf-btn'</span>;
  <span class="kw">const</span> <span class="nm">variantClass</span> = \`siaf-btn-\${variant}\`;
  <span class="kw">const</span> <span class="nm">sizeClass</span> = size !== <span class="str">'md'</span> ? \`siaf-btn-\${size}\` : <span class="str">''</span>;
  
  <span class="kw">return</span> (
    &lt;<span class="tp">button</span> 
      <span class="at">className</span>={clsx(baseClass, variantClass, sizeClass, loading && <span class="str">'siaf-btn-loading'</span>, iconOnly && <span class="str">'siaf-btn-icon-only'</span>, className)}
      <span class="at">disabled</span>={disabled || loading}
      {...props}
    &gt;
      {loading && &lt;<span class="tp">div</span> <span class="at">className</span>=<span class="str">"siaf-spinner"</span> /&gt;}
      {!loading && icon && icon}
      {!iconOnly && children}
    &lt;/<span class="tp">button</span>&gt;
  )
}`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          <strong>Archivo a crear:</strong> <code>components/ui/SiafButton.tsx</code><br><br>
          <strong>Checklist de entrega para B-01:</strong><br>
          1. El componente renderiza exactamente como el preview de la sección 2.<br>
          2. Todas las props documentadas en la sección 3 están implementadas.<br>
          3. Los estilos usan exclusivamente clases de <code>shared.css</code> o variables <code>--pjev-*</code>.<br>
          4. El estado loading debe deshabilitar el click Y mostrar el spinner interno.<br>
          5. Validar con Cristian en <code>transferencias/page.tsx</code> reemplazando el botón "Registrar Movimiento".
        </div>
      </div>
    `,
    do_body: `<button class="siaf-btn siaf-btn-primary">Guardar registro</button>`,
    do_desc: `Usar la variante primary para la acción más importante (submit).`,
    dont_body: `<button style="background-color: #183125; color: white; padding: 8px 16px; border: none; border-radius: 4px;">Guardar registro</button>`,
    dont_desc: `No usar estilos inline (style={{...}}) ni colores hexadecimales hardcodeados en los componentes.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div><strong>transferencias/page.tsx</strong>: Botón "Registrar" usa <code>style={{background: COLORS.green, color: '#fff'}}</code>.</div>
      </div>
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div><strong>polizas/page.tsx</strong>: Múltiples botones usando estilos inline hardcodeados para fondos y colores de texto.</div>
      </div>
    `
  },
  {
    filename: 'b02-button-secondary.html',
    id: 'B-02',
    title: 'Button — Secondary',
    desc: 'Documentación del elemento B-02.',
    tag: 'Base Elements',
    tsx: 'SiafButton.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>El botón secundario se utiliza para acciones alternativas a la acción principal, como "Cancelar", "Regresar" o "Descargar". Tiene menos peso visual que el botón primario.</p>',
    section_preview: `
      <button class="siaf-btn siaf-btn-secondary siaf-btn-sm">Cancelar (sm)</button>
      <button class="siaf-btn siaf-btn-secondary">Cancelar (md)</button>
      <button class="siaf-btn siaf-btn-secondary siaf-btn-lg">Cancelar (lg)</button>
      <div style="width:100%;height:10px;"></div>
      <button class="siaf-btn siaf-btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Exportar</button>
      <button class="siaf-btn siaf-btn-secondary" disabled>Deshabilitado</button>
      <button class="siaf-btn siaf-btn-secondary siaf-btn-loading"><div class="siaf-spinner"></div> Procesando...</button>
    `,
    section_props: `
      <tr><td><code>variant</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Debe ser <code>'secondary'</code></td></tr>
      <tr><td colspan="4" style="text-align:center;color:#666;">Las demás props son idénticas a B-01.</td></tr>
    `,
    section_code: `<span class="cm">// Ver implementación completa en B-01 (SiafButton.tsx)</span>\n<span class="cm">// Uso:</span>\n&lt;<span class="tp">SiafButton</span> <span class="at">variant</span>=<span class="str">"secondary"</span>&gt;Cancelar&lt;/<span class="tp">SiafButton</span>&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          El botón secundario usa fondo blanco y borde verde oscuro. El spinner en modo loading debe ser verde (modificado vía CSS en shared.css).
        </div>
      </div>
    `,
    do_body: `<button class="siaf-btn siaf-btn-secondary">Cancelar</button>`,
    do_desc: `Usar como acción de escape o alternativa segura.`,
    dont_body: `<button style="border: 1px solid #183125; background: #fff;">Cancelar</button>`,
    dont_desc: `No usar botones nativos con estilos inline para simular la jerarquía secundaria.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div><strong>configuracion/usuarios/page.tsx</strong>: Botón "Regresar" usa clases custom sin unificación visual.</div>
      </div>
    `
  },
  {
    filename: 'b03-button-danger.html',
    id: 'B-03',
    title: 'Button — Danger',
    desc: 'Documentación del elemento B-03.',
    tag: 'Base Elements',
    tsx: 'SiafButton.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Usado EXCLUSIVAMENTE para acciones destructivas (eliminar, cancelar documentos, rechazar). Siempre debe estar respaldado por un modal de confirmación (FB-06).</p>',
    section_preview: `
      <button class="siaf-btn siaf-btn-danger siaf-btn-sm">Eliminar (sm)</button>
      <button class="siaf-btn siaf-btn-danger">Eliminar (md)</button>
      <button class="siaf-btn siaf-btn-danger siaf-btn-lg">Eliminar (lg)</button>
      <div style="width:100%;height:10px;"></div>
      <button class="siaf-btn siaf-btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> Borrar registro</button>
      <button class="siaf-btn siaf-btn-danger" disabled>Deshabilitado</button>
      <button class="siaf-btn siaf-btn-danger siaf-btn-loading"><div class="siaf-spinner"></div> Eliminando...</button>
    `,
    section_props: `
      <tr><td><code>variant</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Debe ser <code>'danger'</code></td></tr>
    `,
    section_code: `<span class="cm">// Ver implementación completa en B-01 (SiafButton.tsx)</span>\n<span class="cm">// Uso:</span>\n&lt;<span class="tp">SiafButton</span> <span class="at">variant</span>=<span class="str">"danger"</span> <span class="at">icon</span>={&lt;<span class="tp">Trash2</span> <span class="at">size</span>={14}/&gt;}&gt;Eliminar&lt;/<span class="tp">SiafButton</span>&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          El botón danger usa el token <code>--pjev-rojo-vino</code>. En hover, el fondo cambia a un rojo claro (<code>#fdeaec</code>) para indicar interactividad.
        </div>
      </div>
    `,
    do_body: `<button class="siaf-btn siaf-btn-danger">Eliminar póliza</button>`,
    do_desc: `Usar solo para borrar datos o acciones irreversibles.`,
    dont_body: `<button class="siaf-btn siaf-btn-danger">Cancelar edición</button>`,
    dont_desc: `No usar para "Cancelar" un formulario (eso es botón secondary), ya que no es una acción destructiva de base de datos.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div><strong>components/CancelModal.tsx</strong>: El botón destructivo actual tiene estilos hardcodeados en lugar de usar una variante de botón unificada.</div>
      </div>
    `
  },
  {
    filename: 'b04-button-ghost.html',
    id: 'B-04',
    title: 'Button — Ghost',
    desc: 'Documentación del elemento B-04.',
    tag: 'Base Elements',
    tsx: 'SiafButton.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Botón transparente con bordes sutiles o sin bordes. Se usa para acciones terciarias o de menor jerarquía visual, como filtros, menús desplegables o acciones en toolbars.</p>',
    section_preview: `
      <button class="siaf-btn siaf-btn-ghost siaf-btn-sm">Filtrar (sm)</button>
      <button class="siaf-btn siaf-btn-ghost">Filtrar (md)</button>
      <button class="siaf-btn siaf-btn-ghost siaf-btn-lg">Filtrar (lg)</button>
      <div style="width:100%;height:10px;"></div>
      <button class="siaf-btn siaf-btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> Filtros avanzados</button>
      <button class="siaf-btn siaf-btn-ghost" disabled>Deshabilitado</button>
      <button class="siaf-btn siaf-btn-ghost siaf-btn-loading"><div class="siaf-spinner"></div> Cargando...</button>
    `,
    section_props: `
      <tr><td><code>variant</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Debe ser <code>'ghost'</code></td></tr>
    `,
    section_code: `<span class="cm">// Ver implementación completa en B-01 (SiafButton.tsx)</span>\n<span class="cm">// Uso:</span>\n&lt;<span class="tp">SiafButton</span> <span class="at">variant</span>=<span class="str">"ghost"</span> <span class="at">icon</span>={&lt;<span class="tp">Filter</span> <span class="at">size</span>={14}/&gt;}&gt;Filtrar&lt;/<span class="tp">SiafButton</span>&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          El botón ghost debe mantener el mismo padding que los demás botones para alinear correctamente, pero su color de texto por defecto es <code>--pjev-texto-muted</code>.
        </div>
      </div>
    `,
    do_body: `<button class="siaf-btn siaf-btn-ghost">Ver opciones</button>`,
    do_desc: `Usar en barras de herramientas o menús donde múltiples botones primarios o secundarios saturarían la vista.`,
    dont_body: `<a href="#" style="color: blue; text-decoration: underline;">Ver opciones</a>`,
    dont_desc: `No usar enlaces nativos para disparar acciones de UI que deberían ser botones ghost.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Múltiples vistas donde las opciones terciarias se resuelven con hipervínculos azules sin estilo corporativo.</div>
      </div>
    `
  },
  {
    filename: 'b05-button-icon.html',
    id: 'B-05',
    title: 'Button — Icon Only',
    desc: 'Documentación del elemento B-05.',
    tag: 'Base Elements',
    tsx: 'SiafButton.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Variante del botón que solo contiene un ícono, con padding simétrico. Especialmente útil en columnas de acciones de DataGrids (DG-02). <strong>Obligatorio usar atributo <code>title</code> para accesibilidad.</strong></p>',
    section_preview: `
      <div style="display:flex;gap:8px;">
        <button class="siaf-btn siaf-btn-primary siaf-btn-icon-only" title="Agregar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>
        <button class="siaf-btn siaf-btn-secondary siaf-btn-icon-only" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></button>
        <button class="siaf-btn siaf-btn-danger siaf-btn-icon-only" title="Eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
        <button class="siaf-btn siaf-btn-ghost siaf-btn-icon-only" title="Ver detalle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;">
        <button class="siaf-btn siaf-btn-ghost siaf-btn-sm siaf-btn-icon-only" title="Ver (sm)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
        <button class="siaf-btn siaf-btn-secondary siaf-btn-sm siaf-btn-icon-only" title="Editar (sm)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></button>
        <button class="siaf-btn siaf-btn-danger siaf-btn-sm siaf-btn-icon-only" title="Eliminar (sm)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
      </div>
    `,
    section_props: `
      <tr><td><code>iconOnly</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Aplica padding simétrico al botón</td></tr>
      <tr><td><code>title</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Texto del tooltip para accesibilidad (prop nativa HTML)</td></tr>
    `,
    section_code: `<span class="cm">// Ver implementación completa en B-01 (SiafButton.tsx)</span>\n<span class="cm">// Uso:</span>\n&lt;<span class="tp">SiafButton</span> \n  <span class="at">variant</span>=<span class="str">"ghost"</span> \n  <span class="at">iconOnly</span> \n  <span class="at">icon</span>={&lt;<span class="tp">Pencil</span> <span class="at">size</span>={14}/&gt;} \n  <span class="at">title</span>=<span class="str">"Editar registro"</span>\n/&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          Asegúrate de que la clase CSS <code>.siaf-btn-icon-only</code> aplique un padding igual en todos los lados (ej: <code>padding: 8px;</code> o <code>5px</code> en <code>sm</code>) para que el botón sea un cuadrado perfecto.
        </div>
      </div>
    `,
    do_body: `<button class="siaf-btn siaf-btn-ghost siaf-btn-icon-only" title="Editar"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></button>`,
    do_desc: `Añadir siempre el atributo title para que los usuarios (y lectores de pantalla) sepan qué hace el ícono.`,
    dont_body: `<button class="siaf-btn siaf-btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></button>`,
    dont_desc: `No olvidar prop iconOnly (quedará desalineado por padding asimétrico) y no olvidar title.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div><strong>polizas/page.tsx</strong>: Las acciones en las filas de la tabla están hechas con <code>&lt;button style={{...}}&gt;&lt;svg/&gt;&lt;/button&gt;</code> sin estandarización.</div>
      </div>
    `
  },
  {
    filename: 'b06-button-loading.html',
    id: 'B-06',
    title: 'Button — Loading State',
    desc: 'Documentación del elemento B-06.',
    tag: 'Base Elements',
    tsx: 'SiafButton.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>El estado de carga comunica al usuario que un proceso está en curso, evita envíos múltiples y mantiene el contexto de la acción (sin mostrar un loader gigante que cubra toda la pantalla).</p>',
    section_preview: `
      <div style="display:flex;gap:16px;align-items:center;">
        <button class="siaf-btn siaf-btn-primary">Guardar</button>
        <span>→</span>
        <button class="siaf-btn siaf-btn-primary siaf-btn-loading"><div class="siaf-spinner"></div> Guardando...</button>
      </div>
      <div style="display:flex;gap:16px;align-items:center;margin-top:16px;">
        <button class="siaf-btn siaf-btn-secondary">Generar</button>
        <span>→</span>
        <button class="siaf-btn siaf-btn-secondary siaf-btn-loading"><div class="siaf-spinner"></div> Generando...</button>
      </div>
    `,
    section_props: `
      <tr><td><code>loading</code></td><td><span class="badge-opt">Opcional</span></td><td><code>false</code></td><td>Si es true, muestra el spinner y deshabilita el botón internamente.</td></tr>
      <tr><td><code>children</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Se puede cambiar dinámicamente: <code>loading ? 'Guardando...' : 'Guardar'</code></td></tr>
    `,
    section_code: `<span class="cm">// Ver implementación completa en B-01 (SiafButton.tsx)</span>\n<span class="cm">// Uso con react-hook-form:</span>\n&lt;<span class="tp">SiafButton</span> \n  <span class="at">variant</span>=<span class="str">"primary"</span> \n  <span class="at">loading</span>={isSubmitting}\n&gt;\n  {isSubmitting ? <span class="str">'Guardando...'</span> : <span class="str">'Guardar'</span>}\n&lt;/<span class="tp">SiafButton</span>&gt;`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>
          En el CSS, el <code>.siaf-spinner</code> hereda bordes blancos para botones primary, pero tiene una regla especial para variantes con fondo blanco (secondary, danger, ghost) donde el borde toma un color <code>--pjev-verde-oscuro</code>.
        </div>
      </div>
    `,
    do_body: `<button class="siaf-btn siaf-btn-primary siaf-btn-loading"><div class="siaf-spinner"></div> Procesando</button>`,
    do_desc: `Usar la prop loading para evitar doble submit en cualquier operación de API.`,
    dont_body: `<button class="siaf-btn siaf-btn-primary" disabled>Guardar</button>`,
    dont_desc: `No simplemente deshabilitar el botón sin indicar visualmente que algo está cargando.`,
    section_deprecated: `
      <div class="deprecated-row">
        <div><span class="callout-icon">⚠</span></div>
        <div>Múltiples pantallas deshabilitan botones durante el <code>isSubmitting</code> pero no muestran feedback visual dentro del botón.</div>
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
console.log('Done buttons.');
