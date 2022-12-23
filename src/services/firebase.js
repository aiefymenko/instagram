 import { FieldValue, firebase} from '../lib/firebase';

export async function doesUserNameExist(username) {
  const result = await firebase 
  .firestore()
  .collection('users')
  .where('username', '==', username)
  .get();

  return result.docs.map((user) => user.data().length > 0)
}

//get user from firestore where userid === userId passed from auth 
export async function getUserByUserId (userId) {
  const result = await firebase 
  .firestore()
  .collection('users')
  .where('userId', '==', userId)
  .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));

  return user;

}

//get suggested profiles

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection('users').limit(10).get();
  return result.docs
  .map((user) => ({ ...user.data(), docId: user.id}))
  .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, //currently logged in user
   profileId, //user thet we request to follow
    isFollowingProfile //true/false (are we currently follow it)
    ) {
  return firebase
  .firestore()
  .collection('user')
  .doc(loggedInUserDocId)
  .update({
    following: isFollowingProfile
    ? FieldValue.arrayRemove(profileId)
    : FieldValue.arrayUnion(profileId)
  })
}

export async function updateFollowedUserFollowers(
  profileDocId, //currently logged in user
  loggedInUserDocId, //user thet we request to follow
  isFollowingProfile //true/false (are we currently follow it)
    ) {
  return firebase
  .firestore()
  .collection('user')
  .doc(profileDocId)
  .update({
    following: isFollowingProfile
    ? FieldValue.arrayRemove(loggedInUserDocId)
    : FieldValue.arrayUnion(loggedInUserDocId)
  })
}