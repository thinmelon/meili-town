/**
 * 参数配置 *
 */

var cmsConfig = {
    serverUrl: 'http://10.184.255.10:8080/manage/web/',		    //  给机顶盒用的
    imgUrl: 'http://10.184.255.10:8080/manage/',
    backUrl: '',
    index_back_url: '',
    // environment: 'DEBUG',
    environment: 'PRODUCT',

    /**
     * 美丽北岸
     */
    indexResourceIdArray: [
        {title: '美丽北岸', resourceId: ''},
        // ---------------  菜单  ---------------  //


        // ---------------  海报（播放视频）  ---------------  //
        {title: '左侧海报', resourceId: '941'},
        {title: '右下海报', resourceId: '943'},

        // ---------------  滚动页  ---------------  //
        {title: '右侧滚动页', resourceId: '942'}
    ],

    /**
     * 北岸新闻
     */
    newsResourceIdArray: [
        {title: '北岸新闻', resourceId: ''},
        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //
        {title: '右上海报', resourceId: '945'},
        {title: '右下海报', resourceId: '946'},

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '944'}
    ],

    /**
     * 乡镇风采
     */
    beianResourceIdArray: [
        {title: '乡镇风采', resourceId: ''},
        // ---------------  菜单  ---------------  //
        {title: '山亭镇', resourceId: '947'},       //   山亭镇
        {title: '忠门镇', resourceId: '948'},       //   忠门镇
        {title: '东埔镇', resourceId: '949'},       //   东埔镇

        // ---------------  海报（播放视频）  ---------------  //
        {title: '右下海报', resourceId: '951'},       //   右下海报

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '950'}

        // ---------------  滚动页  ---------------  //
    ],

    /**
     * 部门动态
     */
    apartmentResourceIdArray: [
        {title: '部门动态', resourceId: ''},
        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //
        {title: '最新信息', resourceId: '953'},

        // ---------------  滚动页  ---------------  //
        {title: '左侧滚动页', resourceId: '952'}
    ],


    /**
     * 智慧港城
     */
    smartResourceIdArray: [
        {title: '智慧港城', resourceId: ''},

        // ---------------  菜单  ---------------  //
        {title: '右侧一', resourceId: '956'},
        {title: '右侧二', resourceId: '970'},
        {title: '右侧三', resourceId: '971'},
        {title: '右侧四', resourceId: '972'},

        // ---------------  海报（播放视频）  ---------------  //
        {title: '中间海报', resourceId: '955'},

        // ---------------  列表  ---------------  //
        {title: '左侧列表', resourceId: '954'}

        // ---------------  滚动页  ---------------  //

    ],

    /**
     * 文化旅游
     */
    cultureResourceIdArray: [
        {title: '智慧党建', resourceId: '0'},

        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //
        {title: '右侧一', resourceId: '960'},
        {title: '右侧二', resourceId: '961'},
        {title: '右侧三', resourceId: '962'},
        {title: '中间大海报', resourceId: '963'},

        // ---------------  列表  ---------------  //
        {title: '文化旅游', resourceId: '964'}

        // ---------------  滚动页  ---------------  //

    ],

    /**
     * 专题专栏
     */
    topicResourceIdArray: [
        {title: '专题专栏', resourceId: '0'},
        // ---------------  菜单  ---------------  //
        {title: '左侧海报上', resourceId: '965'},
        {title: '左侧海报下', resourceId: '966'},
        {title: '中间海报上', resourceId: '967'},
        {title: '中间海报下', resourceId: '968'},


        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '969'}

        // ---------------  滚动页  ---------------  //

    ],

    /**
     *  美丽莆田
     */
    putianResourceIdArray: [
        {title: '美丽莆田', resourceId: '0'},

        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //

        // ---------------  滚动页  ---------------  //
        {title: '右侧滚动页', resourceId: '974'}
    ],

    operator: '',
    weather: '',
    temperature: '',
    windScale: ''
};