
document.getElementById("tryitbutton").addEventListener("click", async (e) => {
    console.log(e)
    var oso = new window.oso.Oso();
    var input = document.getElementById("tryitin").innerText;
    var jsInput = document.getElementById("tryitinjs").innerText;
    var exports = {};
    var out = eval(jsInput);
    var actor = exports.actor;
    var action = exports.action;
    var resource = exports.resource;
    oso.loadStr(input);
    var res = await oso.isAllowed(actor, action, resource);
    document.getElementById("tryitout").innerText = res ? "True" : "False"
})