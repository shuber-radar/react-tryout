var UserDisplay = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.user.name}, {this.props.user.email}{this.props.user.admin ? ", Admin" : ""}
      </li>
    );
  }
});
