var UsersOverview = React.createClass({
  render: function() {
    var users = this.props.users.map(function(user) {
      return <UserDisplay key={user.id} user={user} />;
    });

    return (
      <div className="user-overview">
        <ul>
          {users}
        </ul>
      </div>
    );
  }
});
