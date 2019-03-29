exports.run = async (client, msg, args) => {
  client.blacklist.push(args[0]);
  return 0;
}

exports.config = {
  names: ["blacklist", "bl"],
  auth: 1,
  usage: `${config.prefix}blacklist <role id>`
}
