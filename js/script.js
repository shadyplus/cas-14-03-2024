setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "«RHINOXX»";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
const massange = [{
    m: "مرحبًا! اسمي عبد الله السيد. أنا رئيس قسم جراحة المسالك البولية وطبيب مسالك بولية ممارس بخبرة تزيد عن 30 عامًا. "
}, {
    m: "أقدم تشخيصًا مجانيًا لمشاكل و لإلتهاب البروستاتا عبر الإنترنت وتوصيات شخصية ضمن نطاق برنامج تطوير التشخيص  عن بعد . "
}, {
    m: "إذا كنت قلقًا بشأن مشاكل التبول، أو صعوبة التبول، أو عدم الراحة في منطقة الفخذ، فهذا ليس حكمًا بالإعدام! أجب عن بعض الأسئلة وسنجد معًا حلاً لمشكلتك. "
}, {
    m: '<p class="quest">هل لديك رغبة متكررة في التبول؟</p>'
}, {
    m: '<p class="quest">هل لاحظت ألمًا أو شعورًا بالثقل في الفخذ؟</p>'
}, {
    m: '<p class="quest">هل أنت راض عن انتصابك؟</p>'
}, {
    m: '<p class="quest">هل تدخن؟</p>'
}, {
    m: '<p class="quest">كم عمرك؟</p>'
}, {
    m: '<p class="quest">ما هو وزنك الحالي ؟</p>'
}, {
    m: '<p class="quest">ما هو طولك ؟</p>'
}, {
    m: "شكرًا لك. أنت بالفعل تعاني من مشاكل بالبروستات ، لكنك قادر تمامًا على التخلص من هذه المشكلة بسهولة معي اليوم . السبب الرئيسي لالتهاب البروستات هو عدم وصول الدم كفاية للأوعية الدموية في البروستات .  "
}, {
    m: "التهاب البروستاتا هو مشكلة خبيثة. أولاً، يحدث عدم الراحة في منطقة الحوض وتحدث مشاكل في الانتصاب، ولكن بعد ذلك تتغلغل المشكلة بشكل أعمق."
}, {
    m: "في المرحلة الأولية، المشكلة عمليا لا تظهر نفسها . إن انخفاض مستوى القدرة الجنسية ومشاكل التبول هي العلامات الأولى للمشكلة في بدايته. الشيء الأكثر أهمية هو عدم تأخير التعامل معه! العجز الجنسي هو النتيجة الأكثر ضررا لهذه المشكلة. والأخطر من ذلك هو تكون ورم غدة البروستاتا، والذي يؤدي في أغلب الأحيان إلى سرطان البروستاتا. "
}, {
    m: "ولذلك فإن التهاب البروستاتا يحمل عدة مخاطر بالنسبة للرجال في نفس الوقت، وأهمها سرطان البروستاتا."
}, {
    m: "علاوة على ذلك، فإن العجز الجنسي يحدث في 100% من الحالات، أي مع كل رجل مصاب بالتهاب البروستاتا. عند بعض الناس بشكل اسرع، عند الآخرين في وقت لاحق، ولكن دائما. "
}, {
    m: "المشكلة هي أن معظم الرجال المرضى ببساطة لا يذهبون إلى الطبيب للحصول على المساعدة. فمنهم من لا يعتبر هذا المرض خطيرا، والبعض الآخر يعتبره مخزيا. ونتيجة لذلك، لدينا موقف يتجاهل فيه المصاب المشكلة ببساطة. وإذا طلبوا المساعدة، فغالبًا ما يفعلون ذلك في تلك اللحظة عندما يفوت الأوان ويبدأ الورم السرطاني في التطور.يتامين ب3 يعمل لتحويل الطعام إلى طاقة. كما يساعد أيضًا في الحفاظ على صحة الجهاز العصبي والجهاز الهضمي والجلد والشعر."
}, {
    m: "لكن الآن لدى الرجال فرصة فريدة للتخلص من هذه المشكلة ، ودون زيارات منتظمة المختصين. "
}, {
    m: 'الحقيقة هي أنه في عام 2023 ظهر منتج ثوري يستعيد وظيفة البروستاتا، ويزيل الالتهاب، ويشفي تمامًا حتى التهاب البروستاتا المزمن، كما يساعد على زيادة بشكل كبير القدرة الجنسية ومدة الجماع.'
}, {
    m: 'اسم هذا المنتج هو RHINOXX. وهو منتج تم تصنيعه بالجزائر  تم تصنيعه بمكونات تم إستيرادها من اوروبا و  شاركوا العديد من العلماء  أيضًا في تطويره. <br><br> <img src="img/prod.png" class="product-img" style="width: 100%; max-width: 240px;"> '
}, {
    m: "يبدأ مفعول RHINOXX من اليوم الأول لاستخدامه."
}, {
    m: "وكانت النتائج مفاجئة للغاية لأخصائيي المسالك البولية. ما يقرب من 98 ٪ من جميع المصابين يتخلصون من مشاكل البروستات  دون انتكاسات. الآخرين تخلصوا تمامًا من الأعراض وأوقفوا العمليات الالتهابية في البروستاتا. "
},  {
    m: "تبلغ المدة المثالية لإستخدام هذا المكمل الغذائي ، والتي تأخذ في الاعتبار عمرك ومؤشر كتلة جسمك الحالي واسلوب حياتك ، في المتوسط حوالي 60 يومًا. "
}, {
    m: "خلال هذه الفترة , سوف يتم تطهير جسمك تلوث الأوعية الدموية و تحسين عمل الوظيفة الجنسية لديك و التخلص من التهاب البروستات و ألامها .  "
}, {
    m: "أيضاً لدي أخبار جيدة لك! أنت الشخص  رقم 2000 الذي اشخصه عبر الإنترنت! "
}, {
    m: "تستطيع ان تحصل علي  " + OFFER + "بالسعر الترويجي عن طريق إدخال اسمك ورقم هاتفك في نموذج الطلب أدناه. عدد العبوات بالسعر الترويجي محدودة ، لذا أنصحك بالإسراع في طلبك. "
}];
var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 55,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + t + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
    let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}

function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">   نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">لا</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">نعم</span></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">لا</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">نعم</span></div></div>')
}

function choise2() {
    $(".question2M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">لا لدي ضعف انتصاب </span></div><div class="chat-content-buttons-gender-block"><span class="question3W">نعم  أحياناً يكون الإنتصاب قوي </span></div><div class="chat-content-buttons-gender-block"><span class="question3P">انا لا أستطيع ممارسة العلاقة منذ فترة طويلة  </span></div><div class="chat-content-buttons-gender-block"><span class="question3T">أسلوب حياتي مستقر إلي حد ما</span></div></div>')
}

function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا لدي ضعف انتصاب "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم  أحياناً يكون الإنتصاب قوي "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("انا لا أستطيع ممارسة العلاقة منذ فترة طويلة  "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أسلوب حياتي مستقر إلي حد ما"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">نادراً</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">أحياناً</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">لا </span></div><div class="chat-content-buttons-gender-block"><span class="question4T">نعم</span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نادراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحياناً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">أقل من 20 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">من 20 - 30 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">من 31 - 40 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">من 41 - 50 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">أكثر من 50 عاماً</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 20 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 20 - 30 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 31 - 40 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 41 - 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5G").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">حتي 60 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">من 60 إلي 70 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">من 71 إلي 80 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">من 81 إلي 90 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">أكثر من 90 كجم</span></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتي 60 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 60 إلي 70 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 71 إلي 80 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 81 إلي 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6O").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question7() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">أقل من 150 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">من 150 إلي 160 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">من 161 إلي 170 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">من 171 إلي 180 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">أكثر من 180 سم</span></div></div>')
}

function choise7() {
    $(".question7M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 150 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 150 إلي 160 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 161 إلي 170 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 171 إلي 180 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7G").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 180 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}
setTimeout(() => {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app()
                }
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), $(".reviews").removeClass("hide")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});
