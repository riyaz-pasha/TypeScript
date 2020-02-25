export { }

type PointType = {
    x: number
    y: number
}

interface PointInterface {
    x: number
    y: number
}

const getAreaInterface = (args: PointInterface) => args.x * args.y;
const getAreaType = (args: PointType) => args.x * args.y;

interface ThreeDimensions extends PointInterface {
    z: number
}
const get3DAreaInterface = (args: ThreeDimensions) => args.x * args.y * args.z;