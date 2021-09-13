let div1 = dom.create(`<div id="div1">div1</div>`)


dom.after(test, div1)

let div2 = dom.create(`<div id="div2">div2</div>`)
dom.before(test, div2)

dom.append(test, dom.create(`<p>我是test的儿子</p>`))

let father = dom.create(`<div id="father">我是爸爸</div>`)
dom.wrap(div2, father)


dom.remove(div1)

console.log(dom.empty(div5))

dom.attr(div5, 'class', 'attr')
console.log(dom.attr(div5, 'class'))

const div6 = dom.create(`<div id="div6"></div>`)
dom.before(div5, div6)
dom.text(div6, '我是div6')
console.log(dom.text(div6))


dom.html(div6, '<div>content1</div>')

dom.style(div6, 'border', '1px solid black')
dom.style(div6, {'color':'red', 'padding': '20px'})
console.log(dom.style(div6, 'color'))

dom.class.add(div5, 'blue')
dom.class.remove(div5, 'blue')
console.log(dom.class.has(div5, 'blue'))

let fn = function(){console.log('点击了')}
dom.on(div6, 'click', fn)
dom.off(div6, 'click', fn)

console.log(dom.find('#div6')[0])
//在#father里找#div2
console.log(dom.find('#div2', father)[0])

console.log(dom.siblings(s2))

console.log(dom.next(dom.find('#s3')[0]))
console.log(dom.previous(dom.find('#s1')[0]))


const t = dom.find('#div10')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))

console.log(dom.index(dom.find('#s3')[0]))


