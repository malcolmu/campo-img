$(function(){
    ImgResizer.init();
})
var target = $('.campo-img-container');

var ImgResizer = {

    init: function() {

        this.bind();

        this.setHeight();

    },

    bind: function() {

        var _this = this;

        $(window).on('resize', function(){
            _this.setHeight()
        });
    },

    setHeight: function() {
        
        imgWidth = $(target).width();

        imgHeight = imgWidth/2.08;

        $(target).height(imgHeight);

    }
};







