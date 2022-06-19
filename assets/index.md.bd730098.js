import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, e as createVNode, u as unref, V as VTIconShuttle, f as VTIconDiscord, F as Fragment, p as pushScopeId, g as popScopeId, d as createTextVNode, a as createStaticVNode } from "./app.9ebb2f8a.js";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-a7a34694"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "documentation-redirect" }, [
  /* @__PURE__ */ createTextVNode(" This documentation relates to Shuttle.Core before the Microsoft Dependency Injection / Options changes were released. You may wish to view the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://shuttle.github.io/shuttle-core/" }, "latest documentation"),
  /* @__PURE__ */ createTextVNode(". ")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "tagline" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "description" }, " Cross-cutting packages that are used to facilitate the development of .Net software. ", -1));
const _hoisted_5 = {
  href: "https://discord.gg/57ptMQrpwT",
  target: "_blank"
};
const _hoisted_6 = { class: "discord-link" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Join our Discord channel ");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<section id="highlights" class="vt-box-container" data-v-a7a34694><div class="vt-box" data-v-a7a34694><h2 data-v-a7a34694>Framework Support</h2><div data-v-a7a34694>Packages currently target <code data-v-a7a34694>netstandard2.0</code> and <code data-v-a7a34694>netstandard2.1</code> which means that they can be used with .NET Core 2.1+, .NET Framework 4.6.1+, and .NET 5.0+</div></div><div class="vt-box" data-v-a7a34694><h2 data-v-a7a34694>Common Patterns</h2><div data-v-a7a34694>Many common patterns and mechanisms are provided that get you up-and-running quickly.</div></div><div class="vt-box" data-v-a7a34694><h2 data-v-a7a34694>Open Source</h2><div data-v-a7a34694>These packages are free open source software licensed under the <a href="https://opensource.org/licenses/BSD-3-Clause" data-v-a7a34694>3-Clause BSD License</a>. Pull requests are welcome.</div></div></section>', 1);
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          _hoisted_2,
          createVNode(unref(VTIconShuttle), { class: "logo" }),
          _hoisted_3,
          _hoisted_4,
          createBaseVNode("p", null, [
            createBaseVNode("a", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(VTIconDiscord), { class: "discord-logo" }),
                _hoisted_7
              ])
            ])
          ])
        ]),
        _hoisted_8
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a7a34694"]]);
const __pageData = '{"title":"Home","description":"","frontmatter":{"page":true,"title":"Home"},"headers":[],"relativePath":"index.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Home)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
