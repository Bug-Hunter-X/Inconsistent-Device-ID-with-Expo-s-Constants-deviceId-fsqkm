# Inconsistent Device ID with Expo's Constants.deviceId

This repository demonstrates a bug in Expo where `Constants.deviceId` returns inconsistent values, making it unreliable for uniquely identifying devices. This can impact features relying on persistent user data or analytics tied to a specific device.

The `bug.js` file shows how `Constants.deviceId` returns different values in different instances, while `bugSolution.js` offers a workaround using a combination of AsyncStorage and a more robust identification method.