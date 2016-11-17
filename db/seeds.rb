# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

User.create(name: 'John Doe', email: 'john@doe.com', admin: false)
User.create(name: 'Jane Doe', email: 'jane@doe.com', admin: true)
User.create(name: 'foo bar', email: 'foo@bar.com', admin: false)
User.create(name: 'baz biz', email: 'baz@biz.com', admin: false)
User.create(name: 'another user', email: 'another@user.com', admin: false)
User.create(name: 'yetanother user', email: 'yetanother@user.com', admin: true)
