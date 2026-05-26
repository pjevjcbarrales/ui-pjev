const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'fb01-toast-success.html',
    id: 'FB-01',
    title: 'Toast Success',
    desc: 'Notificación emergente para operaciones exitosas.',
    tag: 'Feedback',
    tsx: 'SiafToast.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Mensaje efímero que confirma la correcta ejecución de una acción. Aparece en la esquina superior derecha o inferior y desaparece automáticamente.</p>',
    section_preview: `
      <div style="display:flex; flex-direction:column; gap:16px;">
        <div class="siaf-toast siaf-toast-success" style="width:320px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <div>
            <div class="siaf-toast-title">Registro guardado</div>
            <div class="siaf-toast-msg">El proveedor fue registrado exitosamente en el sistema.</div>
          </div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>type</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'success'</code></td></tr>
      <tr><td><code>title</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Título principal</td></tr>
      <tr><td><code>message</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>Descripción detallada</td></tr>
    `,
    section_code: `<span class="kw">import</span> { <span class="nm">toast</span> } <span class="kw">from</span> <span class="str">'@/lib/toast'</span>;\n\n<span class="nm">toast</span>.<span class="fn">success</span>(<span class="str">'Proveedor guardado'</span>, {\n  <span class="at">description</span>: <span class="str">'El proveedor se registr exitosamente.'</span>\n});`,
    section_instructions: `
      <div class="callout info">
        <span class="callout-icon">📋</span>
        <div>La librera de toast ya existe en <code>lib/toast.tsx</code>. Este componente debe re-exportar y estandarizar sus estilos (duracin 4s).</div>
      </div>
    `,
    do_body: `<div style="font-size:12px;">toast.success('Guardado con xito')</div>`,
    do_desc: `Usar textos estandarizados como 'El [entidad] fue [accin] exitosamente.'`,
    dont_body: `<div style="font-size:12px;">alert('Guardado')</div>`,
    dont_desc: `No usar alertas nativas.`,
    section_deprecated: `<div class="deprecated-row"><div><span class="callout-icon">⚠</span></div><div>Diferentes duraciones hardcodeadas en las notificaciones del sistema.</div></div>`
  },
  {
    filename: 'fb02-toast-error.html',
    id: 'FB-02',
    title: 'Toast Error',
    desc: 'Notificación de fallo o error del sistema.',
    tag: 'Feedback',
    tsx: 'SiafToast.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Notificación para advertir sobre fallos, como errores de red o del servidor. No se usa para validación de formularios.</p>',
    section_preview: `
      <div class="siaf-toast siaf-toast-error" style="width:320px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
        <div>
          <div class="siaf-toast-title">Error al guardar</div>
          <div class="siaf-toast-msg">No se pudo conectar con el servidor. Intente de nuevo.</div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>type</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'error'</code></td></tr>
    `,
    section_code: `<span class="nm">toast</span>.<span class="fn">error</span>(<span class="str">'Error al guardar'</span>, {\n  <span class="at">description</span>: <span class="str">'No se pudo conectar...'</span>\n});`,
    section_instructions: `
      <div class="callout info"><span class="callout-icon">📋</span><div>Los toasts de error deben durar 6.5s para permitir su lectura.</div></div>
    `,
    do_body: `<div style="font-size:12px;">toast.error('Error', {description: error.message})</div>`,
    do_desc: `Mostrar el mensaje real de error cuando sea seguro para el usuario.`,
    dont_body: `<div style="font-size:12px;">toast.error('Fallo')</div>`,
    dont_desc: `No ocultar los detalles del error, el usuario necesita saber qu pas.`,
    section_deprecated: `<div class="deprecated-row"><div><span class="callout-icon">⚠</span></div><div>El uso de toast para errores de validacin de campo (debe ser inline).</div></div>`
  },
  {
    filename: 'fb03-toast-warning.html',
    id: 'FB-03',
    title: 'Toast Warning',
    desc: 'Notificacin de advertencia.',
    tag: 'Feedback',
    tsx: 'SiafToast.tsx',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Advertencias no crticas o mensajes que requieren atencin sin ser un fallo del sistema.</p>',
    section_preview: `
      <div class="siaf-toast siaf-toast-warning" style="width:320px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px;"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        <div>
          <div class="siaf-toast-title">Perodo prximo a cerrar</div>
          <div class="siaf-toast-msg">Recuerde que el cierre es el da 30.</div>
        </div>
      </div>
    `,
    section_props: `<tr><td><code>type</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'warning'</code></td></tr>`,
    section_code: `<span class="nm">toast</span>.<span class="fn">warning</span>(<span class="str">'Atencin'</span>);`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Usar colores mbar/naranja.</div></div>`,
    do_body: `<div>Advertencia estndar</div>`,
    do_desc: `Usar para lmites cercanos.`,
    dont_body: `<div>Error</div>`,
    dont_desc: `No usar para errores fatales.`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'fb04-toast-info.html',
    id: 'FB-04',
    title: 'Toast Info',
    desc: 'Notificacin informativa.',
    tag: 'Feedback',
    tsx: 'SiafToast.tsx',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Notificaciones neutrales o de informacin de fondo.</p>',
    section_preview: `
      <div class="siaf-toast siaf-toast-info" style="width:320px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <div>
          <div class="siaf-toast-title">Sincronizacin iniciada</div>
          <div class="siaf-toast-msg">Se estn descargando los nuevos catlogos.</div>
        </div>
      </div>
    `,
    section_props: `<tr><td><code>type</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'info'</code></td></tr>`,
    section_code: `<span class="nm">toast</span>.<span class="fn">info</span>(<span class="str">'Info'</span>);`,
    section_instructions: `<div class="callout info"><span class="callout-icon">📋</span><div>Color azul.</div></div>`,
    do_body: `<div>Info</div>`,
    do_desc: `Mensajes de estado.`,
    dont_body: `<div>Info</div>`,
    dont_desc: `No saturar al usuario con demasiada info.`,
    section_deprecated: `<div class="deprecated-row"><div>-</div></div>`
  },
  {
    filename: 'fb05-modal-confirm.html',
    id: 'FB-05',
    title: 'Modal Confirmacin',
    desc: 'Modal estndar para confirmar acciones.',
    tag: 'Feedback',
    tsx: 'SiafModal.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Interrumpe el flujo para asegurar que el usuario quiere proceder con una accin importante no destructiva.</p>',
    section_preview: `
      <div style="position:relative; background:#0004; min-height:220px; border-radius:8px; display:flex; align-items:center; justify-content:center;">
        <div style="background:#fff; border-radius:8px; padding:28px; max-width:400px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.25);">
          <h3 style="font-size:16px; font-weight:700; color:#183125; margin-bottom:8px;">Confirmar registro</h3>
          <p style="font-size:13px; color:#5A5A5A; margin-bottom:20px;">Deseas registrar este movimiento? Esta accin quedar guardada en el sistema.</p>
          <div style="display:flex; gap:8px; justify-content:flex-end;">
            <button class="siaf-btn siaf-btn-secondary siaf-btn-sm">Cancelar</button>
            <button class="siaf-btn siaf-btn-primary siaf-btn-sm">Confirmar</button>
          </div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>variant</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'confirm'</code></td></tr>
      <tr><td><code>onConfirm</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td>Handler</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafModal</span> <span class="at">variant</span>=<span class="str">"confirm"</span> /&gt;`,
    section_instructions: `
      <div class="callout info"><span class="callout-icon">📋</span><div>Extender el modal existente para soportar props estandarizadas.</div></div>
    `,
    do_body: `<div>Confirmar guardado</div>`,
    do_desc: `Preguntar con claridad.`,
    dont_body: `<div>Ests seguro?</div>`,
    dont_desc: `Tener ttulos ambiguos.`,
    section_deprecated: `<div class="deprecated-row"><div>Modales con estilos inline.</div></div>`
  },
  {
    filename: 'fb06-modal-destructivo.html',
    id: 'FB-06',
    title: 'Modal Destructivo',
    desc: 'Modal estndar para confirmar eliminacin.',
    tag: 'Feedback',
    tsx: 'SiafModal.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Versin de confirmacin para borrado de datos. Usa estilos de alerta visual (rojo) para prevenir errores.</p>',
    section_preview: `
      <div style="position:relative; background:#0004; min-height:220px; border-radius:8px; display:flex; align-items:center; justify-content:center;">
        <div style="background:#fff; border-radius:8px; padding:28px; max-width:400px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.25);">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5e111a" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            <h3 style="font-size:16px; font-weight:700; color:#5e111a; margin:0;">Eliminar registro</h3>
          </div>
          <p style="font-size:13px; color:#5A5A5A; margin-bottom:20px;">Ests seguro de eliminar este elemento? Esta accin no se puede deshacer.</p>
          <div style="display:flex; gap:8px; justify-content:flex-end;">
            <button class="siaf-btn siaf-btn-secondary siaf-btn-sm">Cancelar</button>
            <button class="siaf-btn siaf-btn-danger siaf-btn-sm">S, eliminar</button>
          </div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>variant</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'destructive'</code></td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafModal</span> <span class="at">variant</span>=<span class="str">"destructive"</span> /&gt;`,
    section_instructions: `
      <div class="callout info"><span class="callout-icon">📋</span><div>Asegurarse de que el botn primario del modal use la clase <code>.siaf-btn-danger</code>.</div></div>
    `,
    do_body: `<div>Eliminar definitivo</div>`,
    do_desc: `Usar botn rojo para que sea evidente.`,
    dont_body: `<div>Eliminar con botn azul</div>`,
    dont_desc: `Usar estilo primario normal para borrar.`,
    section_deprecated: `<div class="deprecated-row"><div>CancelModal actual.</div></div>`
  },
  {
    filename: 'fb07-modal-form.html',
    id: 'FB-07',
    title: 'Modal Formulario',
    desc: 'Modal contenedor de datos.',
    tag: 'Feedback',
    tsx: 'SiafModal.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Un modal ms grande utilizado especficamente para albergar formularios de alta o edicin rpida sin cambiar de pantalla.</p>',
    section_preview: `
      <div style="position:relative; background:#0004; min-height:280px; border-radius:8px; display:flex; align-items:center; justify-content:center;">
        <div style="background:#fff; border-radius:8px; max-width:560px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.25); overflow:hidden;">
          <div style="display:flex; justify-content:space-between; align-items:center; padding:16px 24px; border-bottom:1px solid #D4C9B5;">
            <h3 style="font-size:16px; font-weight:700; color:#183125; margin:0;">Editar registro</h3>
            <span style="cursor:pointer; color:#5A5A5A;">✕</span>
          </div>
          <div style="padding:24px; display:flex; flex-direction:column; gap:16px;">
            <div class="siaf-input-group"><label class="siaf-label">Nombre</label><input type="text" class="siaf-input" value="Dato"></div>
          </div>
          <div style="padding:16px 24px; border-top:1px solid #D4C9B5; display:flex; justify-content:flex-end; gap:8px; background:#f9f9f9;">
            <button class="siaf-btn siaf-btn-secondary">Cancelar</button>
            <button class="siaf-btn siaf-btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    `,
    section_props: `
      <tr><td><code>variant</code></td><td><span class="badge-req">Requerido</span></td><td>-</td><td><code>'form'</code></td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafModal</span> <span class="at">variant</span>=<span class="str">"form"</span> /&gt;`,
    section_instructions: `
      <div class="callout info"><span class="callout-icon">📋</span><div>Debe permitir pasar <code>children</code> para el formulario e inyectar el footer.</div></div>
    `,
    do_body: `<div>Form dentro de modal</div>`,
    do_desc: `Para flujos rpidos.`,
    dont_body: `<div>Form gigante de 50 campos</div>`,
    dont_desc: `No usar modales para CRUDs muy grandes, mejor crear una pgina (FM-03).`,
    section_deprecated: `<div class="deprecated-row"><div>Re-implementacin manual de modales.</div></div>`
  },
  {
    filename: 'fb08-empty-state.html',
    id: 'FB-08',
    title: 'Empty State',
    desc: 'Estado de vaco para tablas o vistas.',
    tag: 'Feedback',
    tsx: 'SiafEmptyState.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Instruye al usuario qu pas o qu debe hacer cuando no hay datos disponibles (ya sea porque no se han creado o porque la bsqueda no arroj resultados).</p>',
    section_preview: `
      <div style="padding:48px; text-align:center; border:1px dashed #D4C9B5; border-radius:8px; background:#fafafa;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4C9B5" stroke-width="2" style="margin:0 auto 16px;"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
        <h3 style="font-size:16px; font-weight:700; color:#183125; margin-bottom:8px;">No se encontraron registros</h3>
        <p style="font-size:14px; color:#5A5A5A; max-width:300px; margin:0 auto 24px;">El catlogo an no tiene registros. Haz clic en el botn para crear el primero.</p>
        <button class="siaf-btn siaf-btn-primary">Nuevo registro</button>
      </div>
    `,
    section_props: `
      <tr><td><code>icon</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>Icono SVG a mostrar</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafEmptyState</span> /&gt;`,
    section_instructions: `
      <div class="callout info"><span class="callout-icon">📋</span><div>Componente centralizado para evitar variaciones visuales en los estados vacos.</div></div>
    `,
    do_body: `<div>Explicar por qu est vaco y qu accin tomar.</div>`,
    do_desc: `Incluir Call to Action.`,
    dont_body: `<div>No hay datos.</div>`,
    dont_desc: `No dejar la pantalla vaca sin explicacin.`,
    section_deprecated: `<div class="deprecated-row"><div>Tablas que no muestran feedback cuando no hay data.</div></div>`
  },
  {
    filename: 'fb09-skeleton.html',
    id: 'FB-09',
    title: 'Skeleton Loading',
    desc: 'Efecto de carga para reducir Layout Shift.',
    tag: 'Feedback',
    tsx: 'SiafSkeleton.tsx',
    status_class: 'nuevo',
    status_text: 'Nuevo componente',
    preview_area_class: '',
    section_desc: '<p>Marcador de posicin que simula el layout del contenido mientras ste se carga desde el servidor.</p>',
    section_preview: `
      <style>
        .siaf-skeleton { display:block; background: linear-gradient(90deg, #e8e3da 25%, #f5f0e8 50%, #e8e3da 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 4px; height: 14px; margin-bottom:12px; }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      </style>
      <div style="max-width:400px;">
        <div class="siaf-skeleton" style="width:80%;"></div>
        <div class="siaf-skeleton" style="width:60%;"></div>
        <div class="siaf-skeleton" style="width:75%;"></div>
      </div>
    `,
    section_props: `
      <tr><td><code>className</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>Para controlar dimensiones</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafSkeleton</span> <span class="at">className</span>=<span class="str">"w-full h-10"</span> /&gt;`,
    section_instructions: `
      <div class="callout info"><span class="callout-icon">📋</span><div>Aadir las reglas de CSS de la animacin shimmer al globals.css.</div></div>
    `,
    do_body: `<div>Usar blocks del mismo tamao que la data final.</div>`,
    do_desc: `Prevencin de layout shift.`,
    dont_body: `<div>Un spinner gigante en medio.</div>`,
    dont_desc: `Los skeletons son ms modernos y menos intrusivos.`,
    section_deprecated: `<div class="deprecated-row"><div>Carga blanca sin feedback.</div></div>`
  },
  {
    filename: 'fb10-error-inline.html',
    id: 'FB-10',
    title: 'Error Inline',
    desc: 'Error de validacin de campos.',
    tag: 'Feedback',
    tsx: 'SiafInput.tsx',
    status_class: 'nuevo',
    status_text: 'Documentado',
    preview_area_class: '',
    section_desc: '<p>Notificacin especfica y contextual para un error en un formulario, ubicado inmediatamente bajo el campo en cuestin.</p>',
    section_preview: `
      <div class="siaf-input-group" style="max-width:300px;">
        <label class="siaf-label siaf-label-req">RFC</label>
        <input type="text" class="siaf-input error" value="abc">
        <span class="siaf-error-msg">El RFC debe tener exactamente 13 caracteres.</span>
      </div>
    `,
    section_props: `
      <tr><td><code>error</code></td><td><span class="badge-opt">Opcional</span></td><td>-</td><td>El string a mostrar.</td></tr>
    `,
    section_code: `&lt;<span class="tp">SiafInput</span> <span class="at">error</span>={errors.rfc?.message} /&gt;`,
    section_instructions: `
      <div class="callout info"><span class="callout-icon">📋</span><div>Ya se encuentra integrado dentro de SiafInput y dems componentes de formulario (B-07 a B-11).</div></div>
    `,
    do_body: `<div>Error inline bajo el input</div>`,
    do_desc: `El contexto inmediato es ms claro.`,
    dont_body: `<div>Toast con 5 errores listados</div>`,
    dont_desc: `No usar toasts para validaciones de esquema (Zod).`,
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
console.log('Done feedback.');
