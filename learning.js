// ES6
// map
{JSON数据.map((user) => {
  return (
    <div>
      <div>姓名：{user.username}</div>
      <div>年龄：{user.age}</div>
      <div>性别：{user.gender}</div>
      <hr />
    </div>
  )
})}

// let of
const usersElements = [] 	// 保存每个用户渲染以后 JSX 的数组
for (let user of JSON数据) {
  usersElements.push( 		// 循环每个用户，构建 JSX，push 到数组中
    <div>
      <div>姓名：{user.username}</div>
      <div>年龄：{user.age}</div>
      <div>性别：{user.gender}</div>
      <hr />
    </div>
  )
}