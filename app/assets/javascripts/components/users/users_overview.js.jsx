var UsersOverview = React.createClass({
  render: function() {
    var users = this.props.users.map(function(user) {
      return <UserDisplay key={user.id} user={user} />;
    });

    return (
      <ul>
        {users}
      </ul>
    );
  }
});
