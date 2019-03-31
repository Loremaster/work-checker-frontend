// Inserting div with data-app to fix "[Vuetify] Unable to locate target [data-app]"
function insertDataAppDiv() {
  const app = document.createElement("div");
  app.setAttribute("data-app", "true");
  document.body.append(app);
}

export { insertDataAppDiv };
