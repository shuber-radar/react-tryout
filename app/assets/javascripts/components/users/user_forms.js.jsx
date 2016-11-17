var UserForms = React.createClass({
  update(val) {
    this.props.update(val);
  },
  saveUser(user) {
    this.props.saveUser(user);
  },
  saveAll() {
    this.props.saveAll();
  },
  render () {
    var users = this.props.users.map(function(user) {
      return <UserEdit
        key={user.id}
        user={user}
        update={this.update}
        saveUser={this.saveUser}
      />;
    }.bind(this));

    return (
      <div>
        {users}

        <button onClick={this.saveAll}>
          save all
        </button>
      </div>
    );
  }
});
