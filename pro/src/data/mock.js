import Mock from 'mockjs'
var Random = Mock.Random;
Random.extend({
    xingzuo:function(data){
        var constellations = ['白羊座','狮子座','射手座','双子座','金牛座','巨蟹座','天秤座','处女座']
        return this.pick(constellations)
    },
    fanwei:function(data){
        var scope = ['1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9']
        return this.pick(scope)
    }
})

var data = Mock.mock({
    'list|10-15':[{
        'pid|+1':0,     
        'name':'@cname()',              //名字        
        'paragraph':'@cparagraph(1)',   //描述
        'images':"@image('200x200')",   //图片
        'suijifanwei':"@fanwei()"       //随机范围斤数
    }]
})

Mock.mock('http://jingdong.com/api',data)
