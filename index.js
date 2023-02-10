$(function () {
    $("#year").text(new Date().getFullYear());
});

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "sample.xml"
    }).done(function (result) {
        $(result).find("sample").each(function () {
            $(".info-body").append('<h3>' + $(this).find('title').text() + '</h3>' + '<p>' + $(this).find('link').text() + '</p>');
        });
        console.log(result);
    });
});