- @ques render from react-dom 能不能自己写一个

- https://blog.atulr.com/react-custom-renderer-3/

## 2020-01-18 10:22:57

- editorInfo="compId=9" 这种属性 要不要放在 LayaComponent 的属性中

* @ques 能不能将 LoadableOptions 中 render return 出来的对象的类型 来决定 loadable option 返回的类型
  - ....
  - 能不能获取 Test 本身的 Props 的类型..

- react resetAfterCommitbest way component communicate

## 2018-03-31 09:47:49

- 每一个 example 里面都有一套相同的 laya 代码太恶心了吧
- 能不能全部打包到一个文件夹中

- 自己写一个专门用来加载资源的插件..
  - react-laya-loadable
  - component
  - loading

## @todo

- @ note 用 x="0" 这种形式可能有问题 x = {0} 是没有问题的

- @difdd

  - mask
  - graphic
  - fillTexture

- @ques 为什么每次属性改变 render 中 ref 会调用两次

- @ques ref 里面 node 不是我想要的类型

* laya export

  - 有哪些 Laya....
  - .d.ts ...
    - 绑定事件要特殊处理 on
    - 一个个的特殊属性
    - typescript keyof delete 私有属性

- @ques 要不要把方法排除掉

* webgl stage 的通用设置...
  - 需不需要将 Laya.stage init, 应该要这样的

- chrome dev tool 高亮 inspect 方法 自定义...

## --------

- @ques

  - Laya node change index
  - laya 能不能把 canvas 放到特定的 div 中
  - getPublicInstance 是不是 核心位置 是 api 的一部分
  - getNativeNode

* @ques \_applyProps 会不会用在 react 核心位置 是 api 的一部分

* @ques 能不能只绑定一次事件 once

* @demo 的位置..

  - example

* @note .d.ts

* npm 如何发布 ...

  - 如果

* @ques getInspectorDataForViewTag

- 如何将自定义渲染放在 stage 里面

  - react component render 不返回 dom 节点
  - StageWrap > stage > ...

- @note
  - 有点卡

* Propsread-only

* @note 报错... <Text>

- @note react 如何更新其中的属性...

  - ddd
  - 如何将属性设置为开发人员工具中可改写的...
  - 开发人员工具高亮.... KonvaRenderer.injectIntoDevTools
  - 开发人员工具没有顶级 stage
  - 性能

- ReactFiberReconciler
- @note react router
  - 能用上吗, react 用来创建 html 元素 history
  - KonvaRenderer.createContainer
  - KonvaRenderer.updateContainer

* @ques
  - react-devtool 如何判断有没有使用 react
  - 渲染节点如何走 react 的逻辑 componentDidMount。。。

- @note

  - 解析 jsx 是 react 做的， render 是自己处理的

- @note
  - fiber 的基本逻辑
  - render 的基本逻辑。。

* @note
  - 要实现将所有的 laya 节点变成 react 节点
  - 实现顶级 render 和每一个节点的 props 对应关系 render 逻辑。。
  - react 可以实现 dom 的渲染， 也就可以实现我想要的
  - props 和节点的对应关系
  - ***
  - 但是其中有多少是需要我去做的。。如果太多那就没有可行性
  - 能不能将 react-dom 中的节点渲染替换掉就可以了。。。

- @ques 如何将 laya 节点， 像 react 一样加入到页面中

- @note react-laya 集成功能
  - find 节点
  - 参考 react-dom zutil...

* @ques laya 中的 ui 要依赖资源这个如何处理

- Laya.ResourceVersion 这个是怎么处理的

- react 开发人员工具 查找结点 如何在 canvas 中使用。。。
