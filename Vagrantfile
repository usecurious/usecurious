# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "curious-api"
  config.vm.network "forwarded_port", guest: 3000, host: 3080

  config.vm.provider "virtualbox" do |vb|
     vb.memory = 4096
  end

  config.vm.synced_folder ".", "/home/vagrant/curious", owner: "vagrant", group: "vagrant"

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: "/home/vagrant/curious/docker-compose.yml", run: "always"
end
