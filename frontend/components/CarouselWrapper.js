import {View, StyleSheet, Image} from "react-native";
import Carousel from 'react-native-snap-carousel';
import {useCallback, useState, useRef} from "react";

const CarouselWrapper = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);

    const renderItem = useCallback(({item, index}) => {
        return (
            <View>
                <Image
                    source={{uri: item}}
                    style={styles.image}
                />
            </View>
        );
    }, []);


    return (
        <Carousel
            layout={"default"}
            ref={ref}
            data={images}
            sliderWidth={370}
            itemWidth={370}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: null,
        height: 250,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "black",
    },
});

export default CarouselWrapper;