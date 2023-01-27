import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Result } from '../interfaces/pokelista';
import { useRouter } from 'next/router';

export const Card_ = ({ id, img, name  }: Result) => {

const router = useRouter();

const onClick = () => {
router.push(`/pokemon/${name}`)
}

    return (
        <Grid xs={6} sm={3} md={2} xl={1}  >

            <Card isHoverable={true} isPressable={true} onClick={ onClick } >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={img} width="100%" height={140}>

                    </Card.Image>
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize" >{name}</Text>
                        <Text> #{id} </Text>
                    </Row>
                </Card.Footer>

            </Card>
        </Grid>)
};

