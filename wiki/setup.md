# Setup

## Install local dependencies
```
npm i
```

## Install MongoDB
```
brew install mongodb
mkdir -p /data/db
sudo chmod 0755 /data/db
sudo chown $USER /data/db
```

## Create admin user
```
mongo
> use shandyclub
> db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles:
    [
      {
        role: "userAdmin",
        db: "shandyclub"
      }
    ]
  }
)
```
