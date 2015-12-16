function load_xml(){
    var $item_list_main = new Array,
    $item_list_side = new Array,
    $item_list_drink = new Array;

    $.ajax({
        url:'http://16sysp.github.io/menus.xml',
        type:'GET',
        dataType:'xml',
        timeout:1000,
        success:function(xml){
            $(xml).find('menu').each(function(){
                if($(this).attr('category') == '定食' || $(this).attr('category') == '丼' || $(this).attr('category') == 'カレー・ピラフ'){
                    $(this).find('item').each(function(){
                        $item_list_main.push($(this).text().replace(/[\n\s　]/g, ""));
                    });
                }else if($(this).attr('category') == 'サイドメニュー'){
                    $(this).find('item').each(function(){
                        $item_list_side.push($(this).text().replace(/[\n\s　]/g, ""));
                    });
                }else{
                    $(this).find('item').each(function(){
                        $item_list_drink.push($(this).text().replace(/[\n\s　]/g, ""));
                    });
                }
            });
            puts_random_menus($item_list_main, $item_list_side, $item_list_drink);
        }
    });
}

function puts_random_menus(item_list_main, item_list_side, item_list_drink){
    var $menu_rand_main = item_list_main[ Math.floor( Math.random() * item_list_main.length)];
    var $menu_rand_side = item_list_side[ Math.floor( Math.random() * item_list_side.length)];
    var $menu_rand_drink = item_list_drink[ Math.floor( Math.random() * item_list_drink.length)];
    
    $("#menu").empty();
    $("#menu").append( 'メイン：' + $menu_rand_main + '<br>');
    $("#menu").append( 'ご一緒にサイドメニューとお飲み物はいかが？<br>' );
    $("#menu").append( 'サイドメニュー：' +$menu_rand_side + '<br>');
    $("#menu").append( '飲み物：' +$menu_rand_drink + '<br>');
}
