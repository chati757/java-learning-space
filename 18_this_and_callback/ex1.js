const video = {
    'title' : 'a',
    'tags' : ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag){
            //this.title ไม่แสดง 'a' เพราะ function นี้เป็น callback มันจึงถูกเรียกภายนอก object video
            console.log(this.title)//it's not show (it's call global object)
            console.log(tag)//it's show all array tags
        })
    }
}

video.showTags();

const resolve_video = {
    'title' : 'a',
    'tags' : ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag){
            //หลังจากแก้โดย pass agrs เป็น this ก็สามารถเรียก this.title ได้ปกติ
            console.log(this.title)//now it's ok
            console.log(tag)//it's show all array tags
        },this)
    }
}

resolve_video();