'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.userModel = exports.User = void 0;
const typegoose_1 = require('@typegoose/typegoose');
const db_1 = require('../utils/db');
let User = class User {
};
__decorate([
    typegoose_1.prop({ required: true, unique: true, type: String })
], User.prototype, 'username', void 0);
__decorate([
    typegoose_1.prop({ required: true, type: String })
], User.prototype, 'profile_pic_url', void 0);
__decorate([
    typegoose_1.prop({ required: true, type: String })
], User.prototype, 'full_name', void 0);
__decorate([
    typegoose_1.prop({ type: String })
], User.prototype, 'biography', void 0);
__decorate([
    typegoose_1.prop({ type: String })
], User.prototype, 'external_url', void 0);
__decorate([
    typegoose_1.prop({ required: true, type: Boolean })
], User.prototype, 'is_joined_recently', void 0);
__decorate([
    typegoose_1.prop({ required: true, type: Boolean })
], User.prototype, 'is_private', void 0);
__decorate([
    typegoose_1.prop({ required: true, type: Boolean })
], User.prototype, 'has_channel', void 0);
__decorate([
    typegoose_1.prop({ required: true, type: Boolean })
], User.prototype, 'is_business_account', void 0);
__decorate([
    typegoose_1.prop({ type: String })
], User.prototype, 'business_category_name', void 0);
__decorate([
    typegoose_1.prop({ required: true, min: 0, type: Number })
], User.prototype, 'follow', void 0);
__decorate([
    typegoose_1.prop({ required: true, min: 0, type: Number })
], User.prototype, 'followed_by', void 0);
__decorate([
    typegoose_1.prop({ required: true, min: 0, type: Number })
], User.prototype, 'timeline_media_count', void 0);
User = __decorate([
    typegoose_1.modelOptions({ schemaOptions: { collection: 'users' } })
], User);
exports.User = User;
exports.userModel = typegoose_1.getModelForClass(User);
exports.userModel.db = db_1.db;
