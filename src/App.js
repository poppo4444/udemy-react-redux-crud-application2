import PropTypes from 'prop-types';

function App() {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 1 },
    { name: 'NoName', age: 3},

  ]
  return (
    <div>
      {
        profiles.map((profile, index) =>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi! i am {props.name}! and age is {props.age}</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
