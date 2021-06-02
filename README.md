# OpenEEW Provisioning App

The OpenEEW Provisioning application helps enable an OpenEEW sensor:

- To connect your new OpenEEW sensor to a WiFi network, it will initially power up and poll for SmartConfig details.
- SmartConfig is a provisioning technology developed by TI to connect a new WiFi device to a WiFi network. It uses a mobile app to broadcast the network credentials from a smartphone, or a tablet, to an un-provisioned WiFi device. The advantage of this technology is that the device does not need to directly know SSID or password of an Access Point (AP). This information is provided using this smartphone app. This is particularly important to headless device and systems, due to their lack of a user interface.
- This Android application prompts you for your WiFi SSID and password and sends it to the OpenEEW device via SmartConfig.
- It also asks you to register your new OpenEEW device so you can view earthquake accelerometer data in the cloud.


## Contributors

<a href="https://github.com/openeew/openeew-provisioner-react/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=openeew/openeew-provisioner-react" />
</a>
___

## Contributing and Developer information

The community welcomes your involvement and contributions to this project. Please read the OpenEEW [contributing](https://github.com/openeew/openeew/blob/master/CONTRIBUTING.md) document for details on our code of conduct, and the process for submitting pull requests to the community.

## License

The OpenEEW sensor is licensed under the Apache Software License, Version 2. Separate third party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](http://www.apache.org/licenses/LICENSE-2.0.txt).
