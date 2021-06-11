function App() {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako' }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) =>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
}

const User = (props) => {
  return <div>Hi! i am {props.name}! and age is {props.age}</div>
}

User.defaultProps = {
  age: 1
}

export default App;
