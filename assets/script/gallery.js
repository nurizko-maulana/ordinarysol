// Page Loader
$(document).ready(function () {
    let list = $('.rarity');

    $(list).click(function () {
        if ($(this).hasClass('ordinary')) {


            $.each($('.card'), function (i, item) {
                if ($(item).hasClass('ordinary')) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            })
        }

        if ($(this).hasClass('unusual')) {

            $.each($('.card'), function (i, item) {
                if ($(item).hasClass('unusual')) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            })
        }

        if ($(this).hasClass('unique')) {

            $.each($('.card'), function (i, item) {
                if ($(item).hasClass('unique')) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            })
        }

        if ($(this).hasClass('extraordinary')) {
            console.log('extraordinary');

            $.each($('.card'), function (i, item) {
                if ($(item).hasClass('extraordinary')) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            })
        }

        if ($(this).hasClass('all')) {
            $.each($('.card'), function (i, item) {

                $(item).show();

            })
        }


        $.each(list, function (i, item) {
            $(item).removeClass('active');
        });
        $(this).toggleClass('active');
    });

    for (let i; i < list.length; i++) {
        console.log('loop');
        $(list[i]).click(function () {
            $(list[i]).toggleClass('active');
            console.log('ok');
        });
    }

    console.log(list.length);
    // $(list[1]).click(function(){
    //     $(list[1]).addClass('active');
    //     console.log('ok');
    // });
    // $('.list-rarity').on("", function () {
    //   // setTimeout(function(){ $('.page-loader').hide("slow"); }, 1000);
    //   setTimeout(function () {
    //     $(".page-loader").fadeOut(500, "linear");
    //   }, 700);
    // });
});
