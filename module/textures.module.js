function TexturesModule() {
    this.drawingAreaWidth = 973;
    this.drawingAreaHeight = 512;
    this.navLeftElementLeft = 70;
    this.navRightElementLeft = 1180;
    this.gallery = [];
    this.imageIndex = 0;
    this.swiper = null;
    this.pager = null;
    /**
     *  滚动时间间隔
     */
    this.marqueeCount = 13;
    /**
     *  模块初始化参数
     */
    this.backURL = '';
    this.id = '';

    /**
     *  数据加载
     */
    this.render = function (data) {
        var that = this,
            drawingAreaElement = document.getElementById('drawing-area'),
            navLeftElement = document.getElementById('nav-left'),
            navRightElement = document.getElementById('nav-right'),
            showImage = data.hasOwnProperty('imgArr') && data.imgArr.length > 0
                && data.imgArr[0].hasOwnProperty('img') && data.imgArr[0].img !== '';

        if (data.content === '' && showImage) {
            document.getElementById('content').style.display = 'none';                      //  清空图文区
            document.getElementById('swiper').style.display = 'none';

            this.gallery = data.imgArr;         //  赋值图集
            drawingAreaElement.style.width = this.drawingAreaWidth + 'px';                  //  设置图集宽度
            drawingAreaElement.style.height = this.drawingAreaHeight + 'px';                //  设置图集高度
            drawingAreaElement.style.backgroundImage = this.gallery[this.imageIndex].img;   //  设置当前图片

            navLeftElement.style.left = this.navLeftElementLeft + 'px';
            navLeftElement.style.backgroundImage = 'url(../images/detail/left.png)';

            navRightElement.style.left = this.navRightElementLeft + 'px';
            navRightElement.style.backgroundImage = 'url(../images/detail/right.png)';

        } else {
            this.pager = new PagerModule();

            if (showImage) {
                this.swiper = new SwiperModule();
                this.swiper.swiperTop = 225;
                this.swiper.swiperLeft = 130;
                this.swiper.swiperWidth = 500;
                this.swiper.swiperHeight = 332;
                this.swiper.remoteImage = true;

                document.getElementById('textures-trapper').className = 'textures-trapper';
                document.getElementById('textures-text').className = 'textures-text';
                showTitleForMarquee(data.title, document.getElementById('textures-title'), this.marqueeCount);
                document.getElementById('textures-text').innerHTML = data.content;
                // 加载滚动图片
                this.swiper.album = data.imgArr;
                this.swiper.init();
            } else {
                document.getElementById('textures-trapper').className = 'textures-trapper-alone';
                document.getElementById('textures-text').className = 'textures-text-alone';
                showTitleForMarquee(data.title, document.getElementById('textures-title'), this.marqueeCount);
                document.getElementById('textures-text').innerHTML = data.content;
            }
            setTimeout(function () {
                that.pager.setParameters();
            }, 500);
        }
    };

    /**
     * 切换图集
     * @param direction
     */
    this.changeImage = function (direction) {
        var drawingAreaElement = document.getElementById('drawing-area'),
            index = this.imageIndex + direction;

        if (index >= 0 && index < this.gallery.length) {
            drawingAreaElement.style.backgroundImage = this.gallery[index].img;
            this.imageIndex = index;
        }

    }
}