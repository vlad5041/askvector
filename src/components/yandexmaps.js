import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


class CustomMap extends Component {
    constructor() {
        super();

        this.state = { template: null };

        this.createTemplateLayoutFactory = ymaps => {
            if (ymaps && !this.state.template) {
                this.setState({
                    template: ymaps.templateLayoutFactory.createClass(
                        'АСК Вектор<br />' +
                        'Контакты:<br />' +
                        '<a href="tel:+78622266356">226 - 63 - 56</a><br />' +
                        'Адрес:<br/>' +
                        'г. Сочи, ул. Транспортная 40/3'
                    ),
                });
            }
        };
    }

    render() {
        return (
            <div className="map" style={{width: '100%', height: '100%'}}>
                <YMaps>
                    <Map
                        width={'100%'}
                        height={'100%'}
                        onLoad={this.createTemplateLayoutFactory}
                        state={{ center: [43.580205, 39.757957], zoom: 17}}
                        modules={['templateLayoutFactory']}
                    >
                        {this.state.template && (
                            <Placemark
                                geometry={[43.579870, 39.762453]}
                                options={{
                                    balloonContentLayout: this.state.template,
                                    iconLayout: 'default#image',
                                    iconImageSize: [45, 56],
                                    iconImageOffset: [-22.5, -56],
                                }}
                                modules={['geoObject.addon.balloon']}
                                properties={{
                                    hintContent: 'Собственный значок метки',
                                }}

                            />
                        )}
                    </Map>
                </YMaps>
            </div>
        );
    }
}
export default CustomMap;