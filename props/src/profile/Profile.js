import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {

    const handleName = () => {
        alert(props.fullName)
    }

    return (
        <div>
            {props.children}
            <h1>{props.fullName}</h1>
            <h3>{props.profession}</h3>
            <p>{props.bio}</p>
            <button onClick={handleName}>Subscribe</button>
        </div>
    )
    }
    Profile.defaultProps = {
            fullName: "xxxx",
            bio: "yyyyy ",
            profession: "Szzzz",
  }
  Profile.propTypes = {
    fullName: Profile.string,
    bio: PropTypes.string,
    professione: Profile.string,
  };
export default Profile
