import { SpeedcontrolUserAdditionArray } from './generated/speedcontrolUserAdditionArray'
import { CommentatorArray } from './generated/commentatorArray'

type ReplicantMap = {
  commentatorArray: CommentatorArray
  speedcontrolUserAdditionArray: SpeedcontrolUserAdditionArray
}

type ReplicantName = 'commentatorArray' | 'speedcontrolUserAdditionArray'

export {
  CommentatorArray,
  SpeedcontrolUserAdditionArray,
  ReplicantMap,
  ReplicantName,
}
