/**
 * Created by sunday on 12/1/16.
 */
(function () {
    var i;
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== "1.4.2") {
        var a = document.createElement("script");
        a.setAttribute("type", "text/javascript");
        a.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
        if (a.readyState) {
            a.onreadystatechange = function () {
                if (this.readyState == "complete" || this.readyState == "loaded") {
                    e()
                }
            }
        } else {
            a.onload = e
        }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(a)
    } else {
        i = window.jQuery;
        d()
    }
    function e() {
        i = window.jQuery.noConflict(true);
        d()
    }

    function d() {
        i(document).ready(function (k) {
            var j = k("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "http://cinkciarz.pl/widget/cinkciarz.pl.widget.css?new=1"
            });
            j.appendTo("head");
            var l = h("cinkciarz.widget.js");
            if (l != "undefined") {
                l = "&" + l
            }
            if (k("#cinkciarzPlWidget").length) {
                c(l);
                setInterval(function () {
                    c(l)
                }, 600000)
            }
            if (k("#cinkciarzPlWidgetNbp").length) {
                b(l)
            }
        })
    }

    function c(j) {
        i(document).ready(function (l) {
            var k = "http://cinkciarz.pl/widget/cinkciarz.widget.php?nbp=0&callback=?" + j + "&location=" + location.href.replace(/^https?:\/\//, "");
            l.getJSON(k, function (m) {
                l("#cinkciarzPlWidget").html(f(m))
            })
        })
    }

    function f(m) {
        if (typeof m.errorMessage !== "undefined" && typeof console !== "undefined" && console.log) {
            console.log(m.errorMessage);
            return
        } else {
            var l = "";
            l += '<div id="currenciesRates" class="cinkciarzCurrenciesWidget">';
            l += '<table summary="Kursy Cinkciarz.pl">';
            l += "<thead>";
            l += "<tr>";
            l += "<th>Waluta</th>";
            l += '<th class="prices">Kupno</th>';
            l += '<th class="prices">Sprzeda\u017c</th>';
            l += "</tr>";
            l += "</thead>";
            var j = "";
            var n = 0;
            for (var k = 0; k < m.length; k++) {
                l += "<tr>";
                if (m[k].diffLevel != "undefined" && m[k].diffLevel == 1) {
                    n = 1;
                    l += '<td title="' + m[k].currencyFullName + '">' + m[k].currencyName + '<span class="red">*</span></td>'
                } else {
                    l += '<td title="' + m[k].currencyFullName + '">' + m[k].currencyName + "</td>"
                }
                if (m[k].trend == 1) {
                    l += '<td class="cur_up"><span><img src="http://cinkciarz.pl/widget/img/cur_up.png" alt="" />' + m[k].buyPrice + "</span></td>";
                    l += '<td class="cur_up"><span><img src="http://cinkciarz.pl/widget/img/cur_up.png" alt="" />' + m[k].sellPrice + "</span></td>"
                } else {
                    l += '<td class="cur_down"><span><img src="http://cinkciarz.pl/widget/img/cur_down.png" alt="" />' + m[k].buyPrice + "</span></td>";
                    l += '<td class="cur_down"><span><img src="http://cinkciarz.pl/widget/img/cur_down.png" alt="" />' + m[k].sellPrice + "</span></td>"
                }
                j = m[k].time;
                l += "</tr>"
            }
            l += "<tbody>";
            l += "</table>";
            l += '<p class="currencyTime">Aktualizacja: ' + j;
            if (n) {
                l += '<br /><span class="red">*</span> Kurs za 100 jednostek waluty.</p>'
            } else {
                l += "</p>"
            }
            l += '<p class="doNotHide"><a href="http://cinkciarz.pl"><img src="http://cinkciarz.pl/widget/img/powered_by_cink.jpg" alt="Powered by Cinkciarz.pl"/></a></p>';
            l += '<div class="clear"></div>';
            l += "</div>";
            return l
        }
    }

    function b(j) {
        i(document).ready(function (l) {
            var k = "http://cinkciarz.pl/widget/cinkciarz.widget.php?nbp=1&callback=?" + j + "&location=" + location.href.replace(/^https?:\/\//, "");
            l.getJSON(k, function (m) {
                l("#cinkciarzPlWidgetNbp").html(g(m))
            })
        })
    }

    function g(l) {
        if (typeof l.errorMessage !== "undefined" && typeof console !== "undefined" && console.log) {
            console.log(l.errorMessage);
            return
        } else {
            var k = "";
            k += '<div id="currenciesRatesNBP" class="cinkciarzCurrenciesWidget">';
            k += '<table summary="Kursy NBP Cinkciarz.pl">';
            k += "<thead>";
            k += "<tr>";
            k += "<th>Waluta</th>";
            k += "<th>Kurs NBP</th>";
            k += "<th class='dateRow'>Data</th>";
            k += "</tr>";
            k += "</thead>";
            var m = 0;
            for (var j = 0; j < l.length; j++) {
                k += "<tr>";
                if (l[j].diffLevel != "undefined" && l[j].diffLevel == 1) {
                    m = 1;
                    k += '<td title="' + l[j].currencyFullName + '">' + l[j].currencyName + '<span class="red">*</span></td>'
                } else {
                    k += '<td title="' + l[j].currencyFullName + '">' + l[j].currencyName + "</td>"
                }
                k += "<td>" + l[j].level + "</td>";
                k += "<td>" + l[j].date + "</td>";
                k += "</tr>"
            }
            k += "<tbody>";
            k += "</table>";
            if (m) {
                k += '<p class="currencyTime"><span class="red">*</span> Kurs za 100 jednostek waluty.</p>'
            }
            k += '<p class="doNotHide"><a href="http://cinkciarz.pl"><img src="http://cinkciarz.pl/widget/img/powered_by_cink.jpg" alt="Powered by Cinkciarz.pl"/></a></p>';
            k += '<div class="clear"></div>';
            k += "</div>";
            return k
        }
    }

    function h(m) {
        var j = document.getElementsByTagName("script");
        for (var k = 0; k < j.length; k++) {
            if (j[k].src.indexOf("/" + m) > -1) {
                if (j[k].src.indexOf("?") != -1) {
                    var l = j[k].src.split("?").pop().split("&");
                    return l
                } else {
                    return "defaultCurrency=1"
                }
            }
        }
        return "defaultCurrency=1"
    }
})();