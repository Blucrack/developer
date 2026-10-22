<box border radius="lg" padding={3} gap={3}>
  <box gap={1}>
    <label>Repository name</label>
    <row background="surface-secondary" radius="md" padding={3} justify="between" align="center">
      <text weight="medium">uae-real-estate-landing</text>
      <button size="xs" variant="ghost" color="secondary" onClick={()=>GenUI.copy("uae-real-estate-landing")}><icon name="copy"/></button>
    </row>
  </box>
  <box gap={1}>
    <label>Description (optional)</label>
    <row background="surface-secondary" radius="md" padding={3} align="center">
      <box flex="1">
        Premium UAE real estate landing page inspired by modern developer websites. Built with Next.js, TypeScript and Tailwind CSS.
      </box>
      <button size="xs" variant="ghost" color="secondary" onClick={()=>GenUI.copy("Premium UAE real estate landing page inspired by modern developer websites. Built with Next.js, TypeScript and Tailwind CSS.")}><icon name="copy"/></button>
    </row>
  </box>
  <box gap={2}>
    <label>Visibility</label>
    <row align="center" gap={2}>
      <icon name="lock" color="secondary"/>
      **Private**
    </row>
  </box>
  <box gap={2}>
    <label>Add README</label>
    <row align="center" gap={2}>
      <icon name="toggle-right" color="success"/>
      **On**
    </row>
  </box>
</box>
