function CanDrive(hasDrivingLiscence, isTired, isSober) {
  if (hasDrivingLiscence == false) {
    return "You cannot drive";
  }

  if (isTired == false && isSober == true) {
    return "You can drive";
  }

  return "You shouldn't drive";
}

module.exports = CanDrive;
