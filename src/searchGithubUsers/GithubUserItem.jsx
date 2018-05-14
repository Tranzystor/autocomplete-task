import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ItemContainer = styled.a`
  display: flex;
  padding: 5px;
  text-decoration: none;
  color: black;
  min-height: 30px;
  background: ${props => (props.isFocused ? "#597ba7" : "white")};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Boldable = styled.span`
  font-weight: ${props => (props.isBolded ? "bold" : "normal")};
`;

const getHighlightedUsername = (login, searchPhrase) => {
  return (
    <React.Fragment>
      {login
        .split(new RegExp(`(${searchPhrase})`, "i"))
        .filter(x => x !== "")
        .map((part, i) => {
          const isBolded = part.toLowerCase() === searchPhrase.toLowerCase();
          return (
            <Boldable key={i} isBolded={isBolded}>
              {part}
            </Boldable>
          );
        })}
    </React.Fragment>
  );
};

class GithubUserItem extends React.Component {
  componentDidUpdate() {
    if (this.props.navigatedIndex === this.props.index) {
      window.location.href = this.props.user.html_url;
    }
  }

  render() {
    const {
      user: { login, avatar_url, html_url },
      index,
      focusedIndex,
      searchPhrase
    } = this.props;

    const isFocused = focusedIndex === index;
    return (
      <ItemContainer href={html_url} isFocused={isFocused}>
        <Avatar src={avatar_url} />
        {getHighlightedUsername(login, searchPhrase)}
      </ItemContainer>
    );
  }
}

GithubUserItem.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { searchPhrase, focusedIndex, navigatedIndex } = state;
  return {
    searchPhrase,
    focusedIndex,
    navigatedIndex
  };
};

export default connect(mapStateToProps)(GithubUserItem);
