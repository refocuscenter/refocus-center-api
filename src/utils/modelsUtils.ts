import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

interface ITimeStamp {
    createdAt: Date,
    updatedAt: Date
}

interface IParanoid {
    deletedAt: Date
}

export class TimeStamp implements ITimeStamp {

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}

export class Paranoid implements IParanoid {

    @DeleteDateColumn()
    deletedAt!: Date;

}

export class TimeStampParanoid implements ITimeStamp, IParanoid {

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

}