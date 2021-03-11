import stars from './blocks/stars';
import hamburger from "./blocks/hamburger";
import carousel from './blocks/carousel';
import knowMore from './blocks/knowMore';

window.addEventListener('DOMContentLoaded', () => {
    stars(
        '.testimonials__carousel_track_item',
        '.testimonials__carousel_track_item_descr_stars_star', 
        '.testimonials__carousel_track_item_descr_stars'
    );
    hamburger(
        '.intro__header_hamburger',
        '.intro__header_menu',
        'intro__header_menu_active'
    );
    const aboutSlider = carousel(
        '.about__content_carousel',
        '.about__content_carousel_frame_track',
        '.about__content_carousel_frame_track_item',
        '.about__content_carousel_dots_dot', 
        null,
        'dot_active',
        false
    );
    const testimonialsSlider = carousel(
        '.testimonials__carousel',
        '.testimonials__carousel_track',
        '.testimonials__carousel_track_item',
        '.testimonials__carousel_triggers_dots_dot',
        '.testimonials__carousel_triggers_arrows',
        'dot_active',
        true
    );
    knowMore(
        '.services__content_item',
        '.services__content_item_wrapper_backside',
        '.services__content_item_wrapper',
        '.services__content_item_wrapper_text_more',
        '.services__content_item_wrapper_backside_close'
    );
});