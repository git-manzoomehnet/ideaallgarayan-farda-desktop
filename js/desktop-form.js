const host = {
    debug: !1,
    settings: {
        "connection.web.trust_login": "https://basispanel.ir/apicms",
        "connection.web.basiscore": "https://basispanel.ir/apicms",
        "connection.web.media": "https://basispanel.ir/apicms",
        "default.dbsource.verb": "post",
        "default.call.verb": "get",
        "default.viewCommand.groupColumn": "prpid",
        "default.dmnid": "4914",
        "default.binding.regex": "\\{##([^#]*)##\\}",
    },
};
window.scrollTo(0, 0);
let loaderContainer = document.querySelector(".loaderContainer");
function onSource1(e) {
    const t = document.querySelector(".homeForm1 #requestBox input[name='captcha']").value,
        o = document.querySelector(".homeForm1 #requestBox input[name='captchaid']").value,
        s = JSON.stringify(e.source?.rows[0]);
    $bc.setSource("edit.object1", { value: s, captcha: t, captchaid: o });
}
let responsMsg = document.querySelector(".responsMsg1"),
    responsMsgIn = document.querySelector(".responsMsg1 span");
async function OnProcessedEditObject1(e) {
    const t = e.response,
        o = await t.json();
    if (6 == o.errorid) {
        (responsMsgIn.innerHTML = "فرم با موفقیت ثبت شد."),
            (responsMsg.style.display = "block"),
            document.querySelector("form").reset(),
            document.querySelectorAll(".homeForm1 div[data-bc-question]").forEach((e) => {
                e.classList.add("afterStar");
            }),
            setTimeout(() => {
                responsMsg.style.display = "none";
            }, 2e3);
    }
    4 == o.errorid &&
        ((responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید."),
        (responsMsg.style.display = "block"),
        setTimeout(() => {
            responsMsg.style.display = "none";
        }, 2e3));
}
function renderFn1(e) {
    window.scrollTo(0, 0),
        (loaderContainer.style.display = "none"),
        document.querySelectorAll(".homeForm1 div[data-bc-question]").forEach((e) => {
            e.classList.add("afterStar");
            let t = e.querySelector(".homeForm1 [data-bc-question-title]"),
                o = e.querySelector(".homeForm1 input"),
                s = e.querySelector(".homeForm1 _textarea");
            t && ((t = e.querySelector(".homeForm1 [data-bc-question-title]").innerHTML), o ? (o.setAttribute("placeholder", t), o.setAttribute("aria-label", t)) : s && (s.setAttribute("placeholder", t), s.setAttribute("aria-label", t)));
        }),
        document.querySelectorAll("input").forEach((e) => {
            e.addEventListener("input", function (e) {
                "" == this.value ? $(this).closest("div[data-bc-question]").addClass("afterStar") : $(this).closest("div[data-bc-question]").removeClass("afterStar");
            });
        }),
        document.querySelectorAll("textarea").forEach((e) => {
            e.addEventListener("input", function (e) {
                "" == this.value ? $(this).closest("div[data-bc-question]").addClass("afterStar") : $(this).closest("div[data-bc-question]").removeClass("afterStar");
            });
        });
}
function renderEditobject(e) {
    loaderContainer.style.display = "none";
}
