module.exports = {
    cap:function(html){
        return String(html)
            .replace('a','A')
            .replace('b','B')
            .replace('c','C')
            .replace('d','D');
    },
    uncap:function(html){
        return String(html)
            .replace('A','a')
            .replace('B','b')
            .replace('C','c')
            .replace('D','d');
    }
};